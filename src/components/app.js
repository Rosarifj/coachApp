import React, { Component } from 'react';
import { Clearfix, Grid, Row, Col } from 'react-bootstrap';
import Navigation from './navbar';
import Sidenav from './sidenav';
import MainPanel from './mainpanel';
import Footer from './footer';


export default class App extends Component {

	render() {
		return (
			<Grid fluid>
				<Row className="show-grid">
					<Navigation />
				</Row>
				<Row className="show-grid">
					<Col md={2}>
						<Sidenav />
					</Col>
					<Col md={10}>
						<MainPanel />
					</Col>
				</Row>
				<Row className="show-grid">
					<Footer />
				</Row>
			</Grid>
		);
	}

}
