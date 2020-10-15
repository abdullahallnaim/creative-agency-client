import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import FirebaseConfig from '../../Login/FirebaseConfig'
import { UserContext } from '../../../App';

const AdminLogin = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(FirebaseConfig);
     }
    document.title = "Login page"
    const {loggedIn} = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = loggedIn;
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: `/admin` } };
    const [getAdminInfo, setGetAdminInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/adminaccess')
            .then(res => res.json())
            .then(data => {
                setGetAdminInfo(data)
            })
    }, [])
    const handleSubmit = (e) => {
        if(getAdminInfo.find(admin => admin.email == document.getElementById('email').value)){
                const googleProvider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(googleProvider).then(function (result) {
                    var token = result.credential.accessToken;
                    const { displayName, photoURL, email, emailVerified } = result.user;
                    const signedInUser = { displayName: displayName, email: email, photoURL: photoURL, emailVerified }
                    setLoggedInUser(signedInUser);
                    history.replace(from)
                }).catch(function (error) {
                    console.log(error)
                });
        }
        else{
            alert('You are not an admin')
            document.getElementById('email').value = ''
        }
        e.preventDefault()
    }

    return (
        <div className='container text-center mt-5 d-flex flex-wrap justify-content-center'>
            <div>
                <div className='mb-5'>
                    <img style={{ width: '250px' }} src={logo} alt="" />
                </div>
                <div id='login' className='border' style={{ height: '300px', width: '550px', padding: '50px', margin: 'auto' }}>
                    <h3 className='pb-5'>Admin Login</h3>
                    <form className='row mb-3' onSubmit={handleSubmit}>
                        <div className = "form-group col-md-12">
                            <input type="email" className = "form-control" id='email' placeholder="jon@gmail.com" />
                        </div>
                        <button type="submit" className = "col-md-12 btn btn-dark">Submit</button>
                    </form>
                    <Link to='/'>Back to home page</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;