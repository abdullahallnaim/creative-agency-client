import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import DashBoardHeader from '../../DashBoarderHeader/DashBoardHeader';
import CustomerDashBoard from '../CustomerDashBoard/CustomerDashBoard';

const ServiceList = () => {
    document.title = 'Service List'
    const { loggedIn } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedIn;
    const [showService, setShowServices] = useState([])
    useEffect(() => {
        fetch('https://quiet-garden-14775.herokuapp.com/getorderinfo?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setShowServices(data))

    }, [])
    return (
        <>
            <DashBoardHeader></DashBoardHeader>
            <div className="row">
                <div className='col-md-3 col-lg-2 col-10 ml-4 mb-4'>
                    <CustomerDashBoard></CustomerDashBoard>
                </div>
                <div className='col-md-8 col-lg-9 col-8 mx-auto'>
                    <h3 className='mb-4'>Service List</h3>
                    <h2>You have ordered:{showService.length} services</h2>
                    <div className="row d-flex justify-content-center">
                        {
                            showService.map(data =>
                                <div className="col-md-8 col-lg-5 col-12 m-4 shadow p-3 mb-5 bg-white rounded" id='service'>
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
