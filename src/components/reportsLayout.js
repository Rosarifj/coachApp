import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const BrowseReports = () => <div>Browse Reports Page <Link to="/reports/4"> Aqui </Link></div>;
const ReportPage = () => <div>Single Report Page</div>;

export default class ReportsLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
    			<Route path="/reports" exact component={BrowseReports} />
    			<Route path="/reports/:id" component={ReportPage} />
			</Switch>
		</div>
    );
  }
}