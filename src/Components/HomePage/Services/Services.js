import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Services.css'
import AOS from 'aos';

AOS.init({
    duration : 2000
  });

const Services = () => {
    const history = useHistory()
    const { services } = useContext(UserContext)
    const [addService, setAddService] = services
    const [showAddedServices, setShowAddedServices] = useState([]);
    useEffect(() => {
        fetch('https://quiet-garden-14775.herokuapp.com/getaddedservices')
            .then(res => res.json())
            .then(data => setShowAddedServices(data))
    }, [])

    const handleClick = (service) => {
        history.push('/order')
        setAddService(service)
    }

    return (
        <div className="" style={{ margin: '90px 0' }}>
            <h4 className='text-center my-5'>Provide awesome <h4 className='text-success font-weight-bold d-inline'>services</h4></h4>
            <div className="row d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-center">
                    {showAddedServices.length === 0 &&
                        <div class="spinner-border text-success p-4 col-md-6 m-auto" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    }
                </div>
                {
                    showAddedServices.map(data => <div className="col-md-3 col-8 m-4 shadow p-3 mb-5 bg-white rounded text-center" id="services" data-aos="flip-left" style={{ cursor: 'pointer' }} onClick={() => handleClick(data)}>
                        <img style={{ width: '80px', display: 'block', margin: 'auto' }} src={`data:/png;base64,${data.image.img}`} alt="" />
                        <h5 className='font-weight-bold my-3'>{data.name}</h5>
                        <p className='text-secondary'>{data.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;