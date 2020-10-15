import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/logo.png';
import CustomerDashBoard from '../CustomerDashBoard/CustomerDashBoard';

const ServiceList = () => {
    const { loggedIn } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedIn;
    const [showOrder, setShowData] = useState([])
    useEffect(() => {
        fetch('https://quiet-garden-14775.herokuapp.com/getorderinfo?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setShowData(data))

    }, [])
    return (
        <>
            <div className='d-flex justify-content-between mt-4'>
                <div>
                    <NavLink to="/" style={{}} className='ml-4'>
                        <img style={{ width: '170px', heigth: '56px' }} src={logo} alt="" />
                    </NavLink>
                </div>
                <p className='col-md-2'> <img style={{ width: '30px', height: '30px' }} src={loggedInUser.photoURL} alt="" /> {loggedInUser.displayName}</p>
            </div>
            <div className='row'>
                <div className='col-md-2 ml-4'>
                    <CustomerDashBoard></CustomerDashBoard>
                </div>
                <div className='col-md-9 col-7 mx-auto mt-4'>
                    <h3 className='mb-4'>Service List</h3>
                    <h2>You have ordered:{showOrder.length} services</h2>
                    <div className="row d-flex justify-content-center">
                        {
                            showOrder.map(data =>
                                <div className="col-md-5 col-8 m-4 shadow p-3 mb-5 bg-white rounded" id='service'>
                                    <div className='row d-flex justify-content-between'>
                                        <img style={{ width: '80px', display: 'block', marginLeft:'20px'}} src={`data:/png;base64,${data.image.img}`} alt="" />
                                        <button className='btn btn-danger mr-3' style={{ height: '40px' }}>Pending</button>
                                    </div>
                                    <h5 className='font-weight-bold my-3'>{data.projectName}</h5>
                                    <p className='text-secondary'>{data.projectDetails}</p>
                                </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceList;
