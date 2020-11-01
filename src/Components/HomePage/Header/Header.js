import React from 'react';
import frame from '../../../logos/Frame.png'


const Header = () => {
    return (
        <div className='container mt-5'>
            <div className='row  d-flex justify-content-center align-items-center'>
                <div className='col-md-6 text-left' data-aos='fade-right'>
                    <h1 className='font-weight-bold'>Let's Grow Your<br />Brand To The <br /> Next Level</h1>
                    <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsa corporis dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis?</p>
                    <a href="#contact-form" className='btn btn-dark px-5'> Hire Us </a>
                </div>
                <div className='col-md-6' data-aos='fade-left'>
                    <img style={{ width: '100%' }} src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;