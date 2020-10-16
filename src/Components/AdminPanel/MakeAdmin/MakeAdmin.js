import React, { useEffect, useState } from 'react';
import DashBoardHeader from '../../DashBoarderHeader/DashBoardHeader';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';

const MakeAdmin = () => {
    document.title = 'Add a new Admin';
    const [getEmail, setGetEmail] = useState({
        email: ''
    })
    const handleEmail = () => {
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
            <DashBoardHeader></DashBoardHeader>
            <div className="row">
                <div className='col-md-4 col-lg-4 col-10'>
                    <AdminDashBoard></AdminDashBoard>
                </div>
                <form className='row col-md-6 col-10 mt-4 mx-auto mx-md-0' onSubmit={handleSubmit}>
                    <div className="form-group col-md-6 col-8 mx-auto mx-md-0">
                        <label htmlFor="" className='font-weight-bold'>Email</label>
                        <input type="email" onBlur={handleEmail} className="form-control" id='email' placeholder="jon@gmail.com" />
                    </div>
                    <button type="submit" className="btn btn-success col-md-4 mt-4 col-8 mx-auto mx-md-0"
                        style={{ height: '50px', width: '50px' }} onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
                <div className='col-md-10 col-lg-6 col-10 mt-4 container mx-auto'>
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
            </div>
        </>
    );
};

export default MakeAdmin;