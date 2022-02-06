import React from 'react';
import{ Navbar, Nav} from 'react-bootstrap';

function NavBar() {
  return (

    <Navbar bg="none" expand="lg" className='nav-div mb-5'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='m2'/>
        <div className='myNav'>
            
            <Navbar.Collapse id="basic-navbar-nav me-0" className='nav-listDiv'>
                <Nav className="me-3 menu">
                    <Nav.Link className='nav-list' href="/">TRIPS</Nav.Link>
                    <Nav.Link className='nav-list' href="/">RECENTLY VIEWED</Nav.Link>
                    <Nav.Link className='nav-list' href="/">BOOKINGS</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">
                <div className='profile-image-div rounded-circle'>
                    <img className='rounded-circle profile-image' src='./images/avatar.png' alt='user profile' />
                </div>
            </Navbar.Brand>
        </div>

    </Navbar>
  );
    
}

export default NavBar;
