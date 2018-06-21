import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const BrowseClients = () => <div>Browse Clients Page <Link to="/clients/4"> Aqui </Link></div>;
const ClientPage = () => <div>Single Client Page</div>;

export default class ClientsLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
    			<Route path="/clients" exact component={BrowseClients} />
    			<Route path="/clients/:id" component={ClientPage} />
			</Switch>
		</div>
    );
  }
}