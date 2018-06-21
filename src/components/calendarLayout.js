import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const BrowseCalendar = () => <div>Browse Calendar Page <Link to="/calendar/4"> Aqui </Link></div>;
const CalendarPage = () => <div>Single Calendar Page</div>;

export default class CalendarLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
    			<Route path="/calendar" exact component={BrowseCalendar} />
    			<Route path="/calendar/:id" component={CalendarPage} />
			</Switch>
		</div>
    );
  }
}