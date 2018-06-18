import React, { Component } from 'react';
import { Clearfix, Grid, Row, Col } from 'react-bootstrap';
import Navigation from './navbar';
import Sidenav from './sidenav';
import ProfileSidenav from './profile_sidenav';
import MainPanel from './mainpanel';
import Footer from './footer';
import { Route, Switch } from 'react-router-dom';


const UsersPage = () => <div>Users Page</div>;
const ProfilePage = () => <div>Profile Page</div>;
const SettingsPage = () => <div>Settings Page</div>;

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
							<Route path="/settings" component={ProfileSidenav} />
							<Route path="/profile" component={ProfileSidenav} />
							<Route path="/" component={Sidenav} />
						</ Switch>
					</Col>
					<Col md={10}>
						<Route path="/" exact component={MainPanel} />
      					<Route path="/dashboard" component={MainPanel} />
      					<Route path="/users" component={UsersPage} />
      					<Route path="/profile" component={ProfilePage} />
      					<Route path="/settings" component={SettingsPage} />
					</Col>
				</Row>
				<Row className="show-grid">
					<Footer />
				</Row>
			</Grid>
		);
	}

}
