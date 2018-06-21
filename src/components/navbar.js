import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { bellO } from 'react-icons-kit/fa/bellO';
import { questionCircleO } from 'react-icons-kit/fa/questionCircleO';

export default class Navigation extends Component {
  render() {
    return (
	    <Navbar collapseOnSelect fluid>
		  <Navbar.Header>
		    <Navbar.Brand>
		      <a href="/">React-Bootstrap</a>
		    </Navbar.Brand>
		    <Navbar.Toggle />
		  </Navbar.Header>
		  <Navbar.Collapse>
		    <Nav pullRight>
		      <NavItem eventKey={1} href="#">
		        <Icon icon={bellO} />
		      </NavItem>
		      <NavItem eventKey={1} href="#">
		        <Icon icon={questionCircleO} />
		      </NavItem>
		      <NavDropdown eventKey={3} title="Fernando Rosario" id="basic-nav-dropdown">
		        <MenuItem eventKey={3.1} href="/account/profile">Profile</MenuItem>
		        <MenuItem eventKey={3.2} href="/account/settings">Settings</MenuItem>
		        <MenuItem eventKey={3.3} href="/account/billing">Billing</MenuItem>
		        <MenuItem eventKey={3.4} href="/account/security">Security</MenuItem>
		        <MenuItem divider />
		        <MenuItem eventKey={3.5}>Logout</MenuItem>
		      </NavDropdown>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
    );
  }
}