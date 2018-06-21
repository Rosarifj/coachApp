import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const BrowseContacts = () => <div>Browse Contacts Page <Link to="/contacts/4"> Aqui </Link></div>;
const ContactPage = () => <div>Single Contact Page</div>;

export default class ContactsLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
    			<Route path="/contacts" exact component={BrowseContacts} />
    			<Route path="/contacts/:id" component={ContactPage} />
			</Switch>
		</div>
    );
  }
}