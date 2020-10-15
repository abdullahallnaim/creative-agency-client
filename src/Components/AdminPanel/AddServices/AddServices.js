import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import { UserContext } from '../../../App';
import { useContext } from 'react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import { Button } from '@material-ui/core';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

const AddServices = () => {
    const { loggedIn, services } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = loggedIn
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        if (document.getElementById('name').value === '' || document.getElementById('image').value === '' || document.getElementById('description').value === '') {
            alert('You must Fill All The Fields')
        }
        else {
            const formData = new FormData()
            console.log(info);
            formData.append('file', file);
            formData.append('name', info.name);
            formData.append('description', info.description);
            fetch('http://localhost:5000/addservices', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        alert('You have successfully added a new service')
                        document.getElementById('name').value = '';
                        document.getElementById('image').value = '';
                        document.getElementById('description').value = '';
                    }
                })
                .catch(error => {
                    console.error(error)
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
                    <AdminDashBoard></AdminDashBoard>
                </div>
                <div className='col-md-8 col-7 mx-auto mt-4'>
                    <h3 className='mb-4'>Add New Service</h3>
                    <form className='row' onSubmit={handleSubmit}>
                        <div className = "form-group col-md-6">
                            <label htmlFor="" className='font-weight-bold'>Service Title</label>
                            <input onBlur={handleBlur} type="text" className = "form-control d-block" id='name' name="name" placeholder="Service name" />
                        </div>
                        <div className = "form-group col-md-5">
                            <label htmlFor="" className='font-weight-bold'>Upload Service Icon</label>
                            <Button
                                className=''
                                variant="contained"
                                component="label"
                                style={{ width: '300px', height: '40px' }}>
                                <FontAwesomeIcon className='mx-2' icon={faCloudUploadAlt} />
                                <input
                                    id='image'
                                    type="file"
                                    style={{ display: "inlineBlock" }}
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </div>
                        <div className = "form-group col-md-8">
                            <label htmlFor="" className='font-weight-bold'>Description</label>
                            <textarea onBlur={handleBlur} className = "form-control" name='description' id="description" rows="5" placeholder='Description'></textarea>
                        </div>
                        <button type="submit" className = "btn btn-success ml-3 px-3 col-md-5" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddServices;