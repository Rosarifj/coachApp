import React, { Component } from 'react';
import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { userCircle } from 'react-icons-kit/fa/userCircle';
import { gears } from 'react-icons-kit/fa/gears';
import { creditCard } from 'react-icons-kit/fa/creditCard';
import { userSecret } from 'react-icons-kit/fa/userSecret';

const SideNav = withRR4();

export default class Sidenav extends Component {
  render() {
    return (
		<div style={{background: '#2c3e50', color: '#FFF'}}> 
	        <SideNav highlightColor='#FFF' highlightBgColor='#687582' defaultSelected='account/profile'>       
	            <Nav id='account/profile'>
	                <NavIcon><SvgIcon size={20} icon={userCircle}/></NavIcon>    
	                <NavText> Profile </NavText>
	            </Nav>
	            <Nav id='account/settings'>
	                <NavIcon><SvgIcon size={20} icon={gears}/></NavIcon>
	                <NavText> Settings </NavText>
	            </Nav>
	            <Nav id='account/billing'>
	                <NavIcon><SvgIcon size={20} icon={creditCard}/></NavIcon>
	                <NavText> Billing </NavText>
	            </Nav>
	            <Nav id='account/security'>
	                <NavIcon><SvgIcon size={20} icon={userSecret}/></NavIcon>
	                <NavText> Security </NavText>
	            </Nav>
	        </SideNav>
	    </div>
    );
  }
}