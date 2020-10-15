import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/logo.png';
import CustomerDashBoard from '../../CustomerPanel/CustomerDashBoard/CustomerDashBoard';

const CustomerOrder = () => {
    const { loggedIn, services } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = loggedIn
    const [addService, setAddService] = services
    document.title = 'Customer Order';
    const [newOrder, setNewOrder] = useState({
        projectName: '',
        projectDetails: '',
        servicePrice: ''
    })
    const handleEvent = (newtask) => {
        const price = document.getElementById('price').value
        const projectName = document.getElementById('project-name').value
        const projectDetails = document.getElementById('project-details').value
        const order = { ...newOrder }
        order.projectName = projectName;
        order.projectDetails = projectDetails;
        order.servicePrice = price;
        setNewOrder(order)
    }
    const handleSubmit = (e) => {
        if (document.getElementById('price').value === '') {
            alert('Please Fill All the fields')
        }
        else {
            const addingOrder = { ...loggedInUser, ...addService, ...newOrder };
            fetch('https://quiet-garden-14775.herokuapp.com/customerorder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addingOrder)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('You have successfully added a new order')
                        document.getElementById('project-name').value = ''
                        document.getElementById('project-details').value = ''
                        document.getElementById('price').value = ''
                    }
                })
        }
        e.preventDefault()
    }
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
                    <CustomerDashBoard></CustomerDashBoard>
                </div>
                <div className='col-md-9 col-7 mx-auto mt-4'>
                    <h3 className='mb-4'>Order</h3>
                    <form className='row' onSubmit={handleSubmit}>
                        <div class="form-group col-md-8">
                            <input type="text" class="form-control" value={loggedInUser.displayName} id='name' placeholder="Your name/ company's name" />
                        </div>
                        <div class="form-group col-md-8">
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={loggedInUser.email} placeholder="Your emai address" />
                        </div>

                        <div class="form-group col-md-8">
                            <input type="text" id='project-name' class="form-control" value={addService.name} placeholder="Project Name" />
                        </div>
                        <div class="form-group col-md-8">
                            <textarea class="form-control" id="project-details" rows="5" value={addService.description} placeholder='Project Details'></textarea>
                        </div>
                        <div class="form-group col-md-8 mr-5">
                            <input type="text" class="form-control" onBlur={handleEvent} id='price' placeholder="Price" />
                        </div>
                        <button class="btn btn-dark col-md-5 ml-2">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CustomerOrder;