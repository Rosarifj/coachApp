import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const BrowseCompanies = () => <div>Browse Companies Page <Link to="/companies/4"> Aqui </Link></div>;
const CompanyPage = () => <div>Single Company Page</div>;

export default class CompaniesLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
    			<Route path="/companies" exact component={BrowseCompanies} />
    			<Route path="/companies/:id" component={CompanyPage} />
			</Switch>
		</div>
    );
  }
}