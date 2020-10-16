import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DashBoardHeader from '../../DashBoarderHeader/DashBoardHeader';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';

const ShowServicesList = () => {
    document.title = 'Show Services List';
    const [showOrder, setShowOrder] = useState([])
    useEffect(() => {
        fetch('https://quiet-garden-14775.herokuapp.com/customersorderinfo')
            .then(res => res.json())
            .then(data => setShowOrder(data))
    }, [])
    return (
        <>
            <DashBoardHeader></DashBoardHeader>
            <div className="row">
                <div className='col-md-6 col-lg-4 col-10 col-xl-2'>
                    <AdminDashBoard></AdminDashBoard>
                </div>
                <div className='col-md-10 col-lg-8 col-xl-9 col-10 mt-4 container'>
                    <h3 className='mb-4'>Services List</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col-2">Name</th>
                                <th scope="col-2">Email Id</th>
                                <th scope="col-2">Service</th>
                                <th scope="col-2" className='d-none d-lg-block'>Project Details</th>
                                <th scope="col-2">Status</th>
                            </tr>
                        </thead>
                        {showOrder.length === 0 &&
                            <div className="spinner-border text-success p-4" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        {
                            showOrder.map(data =>
                                <tbody>
                                    <tr className=''>
                                        <td scope="col-2">{data.displayName}</td>
                                        <td scope="col-2">{data.email}</td>
                                        <td scope="col-2">{data.name}</td>
                                        <td scope="col-2" className='d-none d-lg-block'>{data.projectDetails}</td>
                                        <td scope="col-2">
                                            <select className="" id="exampleFormControlSelect1">
                                                <option className=' text-danger'>Pending</option>
                                                <option className='text-success'>Done</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            )}
                    </table>
                </div>
            </div>
        </>
    );
};

export default ShowServicesList;