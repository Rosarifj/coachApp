import React, { Component } from 'react';
import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { dashboard } from 'react-icons-kit/fa/dashboard';
import { users } from 'react-icons-kit/fa/users';
import { calendar } from 'react-icons-kit/fa/calendar';
import { graduationCap } from 'react-icons-kit/fa/graduationCap';
import { sliders } from 'react-icons-kit/fa/sliders';
import { lineChart } from 'react-icons-kit/fa/lineChart';
import { list } from 'react-icons-kit/fa/list';
import { institution } from 'react-icons-kit/fa/institution';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { Redirect } from 'react-router-dom';

const SideNav = withRR4();

export default class Sidenav extends Component {

  render() {
    return (
		<div style={{background: '#2c3e50', color: '#FFF'}}> 
	        <SideNav highlightColor='#FFF' highlightBgColor='#687582' defaultSelected='dashboard'>
	            <Nav id='dashboard'>
	                <NavIcon><SvgIcon size={20} icon={dashboard}/></NavIcon>    
	                <NavText> Dashboard </NavText>
	            </Nav>
	            <Nav id='clients'>
	                <NavIcon><SvgIcon size={20} icon={users}/></NavIcon>
	                <NavText> Clients </NavText>
	            </Nav>
	            <Nav id='calendar'>
	                <NavIcon><SvgIcon size={20} icon={calendar}/></NavIcon>
	                <NavText> Calendar </NavText>
	            </Nav>
	            <Nav id='knowledge'>
	                <NavIcon><SvgIcon size={20} icon={graduationCap}/></NavIcon>
	                <NavText> Knowledge </NavText>
	            </Nav>
	            <Nav id='reports'>
	                <NavIcon><SvgIcon size={20} icon={lineChart}/></NavIcon>
	                <NavText> Reports </NavText>
	            </Nav>
	            <Nav id='contacts'>
	                <NavIcon><SvgIcon size={20} icon={list}/></NavIcon>
	                <NavText> Contacts </NavText>
	            </Nav>
	            <Nav id='companies'>
	                <NavIcon><SvgIcon size={20} icon={institution}/></NavIcon>
	                <NavText> Companies </NavText>
	            </Nav>
	            <Nav id='setup'>
	                <NavIcon><SvgIcon size={20} icon={sliders}/></NavIcon>
	                <NavText> Setup </NavText>
	            </Nav>
	        </SideNav>
	    </div>
    );
  }
}