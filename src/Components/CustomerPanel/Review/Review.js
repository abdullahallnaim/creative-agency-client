import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import CustomerDashBoard from '../CustomerDashBoard/CustomerDashBoard';
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashBoardHeader from '../../DashBoarderHeader/DashBoardHeader';


const Review = () => {
    document.title = 'Add Review';
    const [reviewInfo, setReviewInfo] = useState({});
    const [reviewerImage, setReviewerImage] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...reviewInfo };
        newInfo[e.target.name] = e.target.value;
        setReviewInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newImageFile = e.target.files[0];
        setReviewerImage(newImageFile);
    }
    const handleSubmit = (e) => {
        if (document.getElementById('name').value === '' || document.getElementById('company-name').value === '' || document.getElementById('description').value === '' || document.getElementById('image').value === '') {
            alert("You Must Fill All The Fields")
        }
        else {
            const reviewData = new FormData()
            reviewData.append('file', reviewerImage);
            reviewData.append('name', reviewInfo.name);
            reviewData.append('companyName', reviewInfo.companyName);
            reviewData.append('description', reviewInfo.description);
            console.log(reviewData.file)
            fetch('https://quiet-garden-14775.herokuapp.com/customerreview', {
                method: 'POST',
                body: reviewData
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        alert("You have successfully added a new review")
                        document.getElementById('name').value = '';
                        document.getElementById('image').value = '';
                        document.getElementById('company-name').value = '';
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
                <div className='col-md-3 col-lg-2 col-10 ml-4 mb-4'>
                    <CustomerDashBoard></CustomerDashBoard>
                </div>
                <div className='col-md-8 col-lg-9 col-8 mx-auto'>
                    <h3 className='mb-4'>Review</h3>
                    <form className='row' onSubmit={handleSubmit}>
                        <div className = "form-group col-md-8">
                            <input type="text" className = "form-control" onBlur={handleBlur} name='name' id='name' placeholder="Your name" />
                        </div>
                        <div className = "form-group col-md-8">
                            <input type="text" className = "form-control" onBlur={handleBlur} name='companyName' id='company-name' placeholder="Company's name, Designation" />
                        </div>
                        <div className = "form-group col-md-8">
                            <textarea className = "form-control" onBlur={handleBlur} name='description' id="description" rows="5" placeholder='Description'></textarea>
                        </div>
                        <div className = "form-group col-md-6">
                            <Button
                                className=''
                                variant="contained"
                                component="label"
                                style={{ height: '50px', width:'280px'}}>
                                <FontAwesomeIcon className='ml-4 mr-2' icon={faCloudUploadAlt} />
                                <input
                                    id='image'
                                    type="file"
                                    style={{ display: "inlineBlock" }}
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </div>
                        <button className = "btn btn-dark col-md-8 ml-2">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Review;
