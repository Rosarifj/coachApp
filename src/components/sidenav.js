import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

export default class Sidenav extends Component {
  render() {
    return (
		<div style={{background: '#2c3e50', color: '#FFF'}}> 
	        <SideNav highlightColor='#FFF' highlightBgColor='#687582' defaultSelected='dashboard'>       
	            <Nav id='dashboard'>
	                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
	                <NavText> Dashboard </NavText>
	            </Nav>
	            <Nav id='sales'>
	                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
	                <NavText> Sales </NavText>
	            </Nav>
	        </SideNav>
	    </div>
    );
  }
}