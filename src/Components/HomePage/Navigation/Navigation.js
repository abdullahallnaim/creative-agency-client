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
        <div className="container pt-3">
            <Navbar expand="lg">
                <NavLink to="/">
                    <img style={{ width: '120px', heigth: '56px' }} src={logo} alt="" />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/">Home</NavLink>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" href="#portfolio">Our Portfolio</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/">Our Team</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" href="#contact-form">Contact Us</a>
                        {
                            loggedInUser.emailVerified ?
                                <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/servicelist">{loggedInUser.displayName}</NavLink>

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