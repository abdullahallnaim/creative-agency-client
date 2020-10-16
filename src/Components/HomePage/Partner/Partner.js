import React from 'react';
import slack from '../../../logos/slack.png'
import google from '../../../logos/google.png'
import uber from '../../../logos/uber.png'
import netflix from '../../../logos/netflix.png'
import airnb from '../../../logos/airbnb.png'

const Partner = () => {
    return (
        <div className='container' style={{margin:'100px auto'}}>
            <div className='row  d-flex justify-content-center'>
                <div className="col-5 col-md-4 col-lg-2 m-3">
                    <img style={{width:'120px'}} src={slack} alt=""/>
                </div>
                <div className="col-5 col-md-4 col-lg-2 m-3">
                    <img style={{width:'120px'}} src={google} alt=""/>
                </div>
                <div className="col-5 col-md-4 col-lg-2 m-3">
                    <img style={{width:'120px'}} src={uber} alt=""/>
                </div>
                <div className="col-5 col-md-4 col-lg-2 m-3">
                    <img style={{width:'120px'}} src={netflix} alt=""/>
                </div>
                <div className="col-5 col-md-4 col-lg-2 m-3">
                    <img style={{width:'120px'}} src={airnb} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Partner;