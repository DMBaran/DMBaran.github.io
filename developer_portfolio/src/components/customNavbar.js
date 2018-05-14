import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class customNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Devin Baran</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href='/' to='/'>
                            About
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href='/portfolio' to='/portfolio'>
                            Portfolio
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href='/contact' to='/contact'>
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}