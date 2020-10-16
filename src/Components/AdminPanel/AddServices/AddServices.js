import React from 'react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';
import { Button } from '@material-ui/core';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import DashBoardHeader from '../../DashBoarderHeader/DashBoardHeader';

const AddServices = () => {
    document.title = 'Add New Service';
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
            fetch('https://quiet-garden-14775.herokuapp.com/addservices', {
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
            <DashBoardHeader></DashBoardHeader>
            <div className="row">
                <div className='col-md-4 col-lg-4 col-10'>
                    <AdminDashBoard></AdminDashBoard>
                </div>
                <div className='col-md-8 col-8 mt-5 mx-auto'>
                    <h3 className='mb-4'>Add New Service</h3>
                    <form className='row' onSubmit={handleSubmit}>
                        <div className="form-group col-md-6">
                            <label htmlFor="" className='font-weight-bold'>Service Title</label>
                            <input onBlur={handleBlur} type="text" className="form-control d-block" id='name' name="name" placeholder="Service name" />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="" className='font-weight-bold'>Upload Service Icon</label> <br></br>
                            <Button
                                className=''
                                variant="contained"
                                component="label"
                                style={{}}>
                                <FontAwesomeIcon className='mr-2' icon={faCloudUploadAlt} />
                                <input
                                    id='image'
                                    type="file"
                                    style={{ display: "inlineBlock" }}
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="" className='font-weight-bold'>Description</label>
                            <textarea onBlur={handleBlur} className="form-control" name='description' id="description" rows="5" placeholder='Description'></textarea>
                        </div> <br />
                        <button type="submit" className="btn btn-success ml-3 px-3 col-md-6" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddServices;