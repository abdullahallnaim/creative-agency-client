import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/logo.png';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';

const MakeAdmin = () => {
    const { loggedIn, services } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = loggedIn

    const [getEmail, setGetEmail] = useState({
        email: ''
    })
    const handleEmail = (user) => {
        const email = document.getElementById('email').value
        const setEmail = { ...getEmail }
        setEmail.email = email
        setGetEmail(setEmail)
    }
    const handleSubmit = (e) => {
        const userEmail = { ...getEmail }
        fetch('https://quiet-garden-14775.herokuapp.com/makeadmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userEmail)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('You have successfully added a new admin')
                    document.getElementById('email').value = ''
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }
    const [showAdmin, setShowAdmin] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/adminaccess')
            .then(res => res.json())
            .then(data => {
                setShowAdmin(data)
                console.log(data)
            })
    }, [])

    return (
        <>
            <div className='d-flex justify-content-between mt-4'>
                <div className='d-flex'>
                    <div>
                        <NavLink to="/" style={{}} className='ml-3'>
                            <img style={{ width: '170px', heigth: '56px', marginLeft: '10px' }} src={logo} alt="" />
                        </NavLink>
                    </div>
                </div>
                <p className='col-md-2'><img style={{ width: '30px', height: '30px' }} src={loggedInUser.photoURL} alt="" /> {loggedInUser.displayName}</p>
            </div>
            <div className='row'>
                <div className='col-md-2 ml-4'>
                    <AdminDashBoard></AdminDashBoard>
                </div>
                <div className='col-md-7 col-7 mx-auto mt-5'>
                    <form className='row' onSubmit={handleSubmit}>
                        <div className = "form-group col-md-8">
                            <input type="email" onBlur={handleEmail} className = "form-control" id='email' placeholder="jon@gmail.com" />
                        </div>
                        <button type="submit" className = "btn btn-dark ml-3 px-3 col-md-5" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
            <div className='col-md-6 mx-auto col-7 mt-4'>
                <h3 className='ml-4'>Other Admin</h3>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col-3">Admin Id</th>
                            <th scope="col-3">Email Id</th>
                        </tr>
                    </thead>
                    {
                        showAdmin.map((data, index) =>
                            <tbody>
                                <tr className='font-weight-normal'>
                                    <td>00{index + 1}</td>
                                    <td>{data.email}</td>
                                </tr>
                            </tbody>
                        )}
                </table>
            </div>
        </>
    );
};

export default MakeAdmin;