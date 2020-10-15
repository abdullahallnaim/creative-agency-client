import React from 'react';
import { NavLink } from 'react-router-dom';
import { faCartPlus,faCommentDots,faList } from"@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerDashBoard = () => {
    return (
        <div className='mt-5 ml-3'>
            <NavLink to='/order' className='font-weight-bold d-block' activeStyle={{ color: 'green' }}> <FontAwesomeIcon className='mr-2' icon={faCartPlus} />    Order</NavLink> <br />
            <NavLink to='/servicelist' className='font-weight-bold d-block' activeStyle={{ color: 'green' }}> <FontAwesomeIcon className='mr-2' icon={faList} /> Service list</NavLink><br />
            <NavLink to='/review' className='font-weight-bold d-block' activeStyle={{ color: 'green' }}> <FontAwesomeIcon className='mr-2' icon={faCommentDots} />  Review
            </NavLink>
        </div>
    );
};

export default CustomerDashBoard;
