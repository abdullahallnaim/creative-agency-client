import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';

const DashBoardHeader = () => {
    const { loggedIn } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedIn;
    return (
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
    );
};

export default DashBoardHeader;