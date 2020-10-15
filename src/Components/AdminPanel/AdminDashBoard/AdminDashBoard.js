import React from 'react';
import { NavLink } from 'react-router-dom';
import { faPlusSquare,faUserPlus,faList, faUser } from"@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashBoard = () => {
    return (
        <div className='mt-5 ml-3'>
            <NavLink to='/admin-serviceslist' className='font-weight-bold d-block' activeStyle={{ color: 'green' }}> <FontAwesomeIcon className='mr-2' icon={faList} />  Service List</NavLink> <br />
            <NavLink to='/admin-addservices' className='font-weight-bold d-block' activeStyle={{ color: 'green' }}> <FontAwesomeIcon className='mr-2' icon={faPlusSquare} />  Add Service</NavLink><br />
            <NavLink to='/admin-makeadmin' className='font-weight-bold d-block' activeStyle={{ color: 'green' }}> <FontAwesomeIcon className='mr-2' icon={faUserPlus} />Make Admin
            </NavLink>
            <NavLink to='/admin' className='font-weight-bold d-block my-4' activeStyle={{ color: 'green' }}> <FontAwesomeIcon className='mr-2' icon={faUser} />Admin Info
            </NavLink>
            
        </div>
    );
};

export default AdminDashBoard;