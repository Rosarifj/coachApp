import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const BrowseDashboard = () => <div>Browse Dashboard Page <Link to="/dashboard/4"> Aqui </Link></div>;
const DashboardPage = () => <div>Single Dashboard Page</div>;

export default class DashboardLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
        <Route path="/" exact component={BrowseDashboard} />
    			<Route path="/dashboard" exact component={BrowseDashboard} />
    			<Route path="/dashboard/:id" component={DashboardPage} />
			</Switch>
		</div>
    );
  }
}