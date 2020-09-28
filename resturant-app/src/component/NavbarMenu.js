import React, { Component } from 'react';

import {
    Navbar,
    Nav
} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCoffee, faHome, faPlus, faSearch, faList } from '@fortawesome/free-solid-svg-icons'



class NavbarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCoffee} color="purple" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><li><Link to='/'><FontAwesomeIcon icon={faHome} color="black" /> Home</Link></li></Nav.Link>
                            <Nav.Link href="#link"><li><Link to='/list'><FontAwesomeIcon icon={faList} color="black" /> List</Link></li></Nav.Link>
                            <Nav.Link href="#link"><li><Link to='/create'><FontAwesomeIcon icon={faPlus} color="black" /> Create</Link></li></Nav.Link>
                            <Nav.Link href="#link"><li><Link to='/search'><FontAwesomeIcon icon={faSearch} color="black" /> Search</Link></li></Nav.Link>
                            {
                                localStorage.getItem('login')?
                                <Nav.Link href="#link"><li><Link to='/logout'><FontAwesomeIcon icon={faUser} color="black" /> Logout</Link></li></Nav.Link>
                                :
                                <Nav.Link href="#link"><li><Link to='/login'><FontAwesomeIcon icon={faUser} color="black" /> Login</Link></li></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarMenu;