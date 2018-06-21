import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const AccountHomePage = () => <div>Account Home Page</div>;
const ProfilePage = () => <div>Profile Page</div>;
const SettingsPage = () => <div>Settings Page</div>;
const BillingPage = () => <div>Billing Page</div>;
const SecurityPage = () => <div>Security Page</div>;

export default class AccountLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
    			<Route path="/account" exact component={AccountHomePage} />
    			<Route path="/account/profile" component={ProfilePage} />
          <Route path="/account/settings" component={SettingsPage} />
          <Route path="/account/billing" component={BillingPage} />
          <Route path="/account/security" component={SecurityPage} />
			</Switch>
		</div>
    );
  }
}