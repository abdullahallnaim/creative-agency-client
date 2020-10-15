import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import nophoto from '../../../profilenone.jpg'

const ClientsFeedBack = () => {
    const [showReviewData, setShowReviewData] = useState([]);
    useEffect(() => {
        fetch('https://quiet-garden-14775.herokuapp.com/getreviewdata')
            .then(res => res.json())
            .then(data => setShowReviewData(data))
    }, [])
    return (
        <div className="" style={{ marginTop: '90px' }}>
            <div style={{ margin: '60px' }}>
                <h4 className='text-center font-weight-bold' >Clients <p className='text-success d-inline font-weight-bold'>Feedback</p></h4>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-center">
                    {showReviewData.length === 0 &&
                        <div className = "spinner-border text-success p-4 col-md-6 m-auto" role="status">
                            <span className = "sr-only">Loading...</span>
                        </div>
                    }
                </div>
                {
                    showReviewData.map(data =>
                        <div className="col-md-3 col-8 m-4 shadow p-3 mb-5 bg-white rounded">
                            <div className='d-flex'>
                                {
                                data.photo.image?
                                    <img style={{ width: '50px', height: '50px' }} src={`data:/png;base64,${data.photo.image}`} alt="" />
                                    :<img style={{ width: '50px', height: '50px' }} src={nophoto} alt="" />
                                }<br />
                                <div className='ml-3 text-left'>
                                    <h6 className='font-weight-bold'>{data.reviewName}</h6>
                                    <small className='font-weight-bold'>{data.companyName}</small>
                                </div>
                            </div>
                            <div>
                                <p className='text-secondary text-left mt-3'>{data.description}</p>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default ClientsFeedBack;