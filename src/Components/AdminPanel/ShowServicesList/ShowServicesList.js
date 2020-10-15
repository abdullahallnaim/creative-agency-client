import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/logo.png';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';

const ShowServicesList = () => {
    const { loggedIn } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedIn;
    const [showOrder, setShowData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/customersorderinfo')
            .then(res => res.json())
            .then(data => setShowData(data))

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
                <p className='col-md-2'> <img style={{ width: '30px', height: '30px' }} src={loggedInUser.photoURL} alt="" /> {loggedInUser.displayName}</p>
            </div>
            <div className='row'>
                <div className='col-md-2 ml-4'>
                    <AdminDashBoard></AdminDashBoard>
                </div>
                <div className='col-md-9 mt-4'>
                    <h3 className='ml-4'>Services List</h3>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col-3">Name</th>
                                <th scope="col-3">Email Id</th>
                                <th scope="col-3">Service</th>
                                <th scope="col-3" className="d-none d-lg-block">Project Details</th>
                                <th scope="col-3">Status</th>
                            </tr>
                        </thead>
                            {showOrder.length === 0 &&
                                <div className = "spinner-border text-success p-4" role="status">
                                    <span className = "sr-only">Loading...</span>
                                </div>
                            }
                        {
                            showOrder.map(data =>
                                <tbody>
                                    <tr className='font-weight-normal'>
                                        <td>{data.displayName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.name}</td>
                                        <td className='d-none d-lg-block'>{data.projectDetails}</td>
                                        <td>
                                            <div className = "form-group">
                                                <select className = "form-control" id="exampleFormControlSelect1">
                                                    <option className='text-white bg-danger'>Pending</option>
                                                    <option className='text-white bg-success'>Done</option>
                                                </select>
                                            </div>
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