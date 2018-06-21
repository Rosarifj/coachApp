import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const BrowseSetup = () => <div>Browse Setup Page <Link to="/setup/4"> Aqui </Link></div>;
const SetupPage = () => <div>Single Setup Page</div>;

export default class SetupLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
    			<Route path="/setup" exact component={BrowseSetup} />
    			<Route path="/setup/:id" component={SetupPage} />
			</Switch>
		</div>
    );
  }
}