import React from 'react';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/logo.png'
const Navigation = () => {
    const { loggedIn } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = loggedIn;
    const history = useHistory()
    return (
        <div className="container">
            <Navbar expand="lg">
                <NavLink to="/">
                    <img style={{ width: '100px', heigth: '56px' }} src={logo} alt="" />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/home">Home</NavLink>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/donation">Our Portfolio</NavLink>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/teams">Our Team</NavLink>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/contact">Contact Us</NavLink>
                        {
                            loggedInUser.emailVerified ?
                                <p className="font-weight-bold text-dark mt-2 px-3 d-inline mx-3" style={{ cursor: "pointer" }} onClick={() => history.push('/sevicelist')}>{loggedInUser.displayName}</p>

                                : <button className='btn btn-dark px-5 mx-3 my-2' onClick={() => history.push('/login')}>Login</button>
                        }
                        <button className='btn btn-dark px-5 mx-3 my-2' onClick={() => history.push('/adminlogin')}>Admin Login</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;