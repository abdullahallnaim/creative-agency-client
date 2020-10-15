import React, { useContext } from 'react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import { UserContext } from '../../../App';
import { NavLink } from 'react-router-dom';
import logo from '../../../logos/logo.png';

const Admin = () => {
    const { loggedIn, services } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = loggedIn
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
                    <img src={loggedInUser.photoURL} alt="" />
                    <h2>{loggedInUser.displayName}</h2>
                </div>
            </div>
        </>
    );
};

export default Admin;