import React, { Component } from 'react';
import { Clearfix, Grid, Row, Col } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './navbar';
import Sidenav from './sidenav';
import ProfileSidenav from './profile_sidenav';
import MainPanel from './mainpanel';
import Footer from './footer';
import ClientsLayout from './clientsLayout';
import CalendarLayout from './calendarLayout';
import CompaniesLayout from './companiesLayout';
import ContactsLayout from './contactsLayout';
import DashboardLayout from './dashboardLayout';
import KnowledgeLayout from './knowledgeLayout';
import ReportsLayout from './reportsLayout';
import SetupLayout from './setupLayout';
import AccountLayout from './accountLayout';

export default class App extends Component {

	render() {
		return (
			<Grid fluid>
				<Row className="show-grid">
					<Navigation />
				</Row>
				<Row className="show-grid">
					<Col md={2}>
						<Switch>
							<Route path="/account" component={ProfileSidenav} />
							<Route path="/" component={Sidenav} />
						</Switch>
					</Col>
					<Col md={10}>
						<Switch>
							<Route path="/" exact component={DashboardLayout} />
	      					<Route path="/dashboard" component={DashboardLayout} />
	      					<Route path="/clients" component={ClientsLayout} />
	      					<Route path="/calendar" component={CalendarLayout} />
	      					<Route path="/knowledge" component={KnowledgeLayout} />
	      					<Route path="/reports" component={ReportsLayout} />
	      					<Route path="/contacts" component={ContactsLayout} />
	      					<Route path="/companies" component={CompaniesLayout} />
	      					<Route path="/setup" component={SetupLayout} />
	      					<Route path="/account" component={AccountLayout} />
	      					<Redirect to="/" />
	      				</Switch>
					</Col>
				</Row>
				<Row className="show-grid">
					<Footer />
				</Row>
			</Grid>
		);
	}

}
