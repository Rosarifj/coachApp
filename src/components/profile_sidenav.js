import React, { Component } from 'react';
import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

const SideNav = withRR4();

export default class Sidenav extends Component {
  render() {
    return (
		<div style={{background: '#2c3e50', color: '#FFF'}}> 
	        <SideNav highlightColor='#FFF' highlightBgColor='#687582' defaultSelected='profile'>       
	            <Nav id='profile'>
	                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
	                <NavText> Profile </NavText>
	            </Nav>
	            <Nav id='settings'>
	                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
	                <NavText> Settings </NavText>
	            </Nav>
	        </SideNav>
	    </div>
    );
  }
}