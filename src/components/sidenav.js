import React, { Component } from 'react';
import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { Redirect } from 'react-router-dom';

const SideNav = withRR4();

export default class Sidenav extends Component {

	printConsole = (id, parent) => {
        console.log ("ID: ", id);
        return <Redirect to='/profile' />;
    }

  render() {
    return (
		<div style={{background: '#2c3e50', color: '#FFF'}}> 
	        <SideNav highlightColor='#FFF' highlightBgColor='#687582' defaultSelected='dashboard'>
	            <Nav id='dashboard'>
	                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
	                <NavText> Dashboard </NavText>
	            </Nav>
	            <Nav id='users'>
	                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
	                <NavText> Users </NavText>
	            </Nav>
	        </SideNav>
	    </div>
    );
  }
}