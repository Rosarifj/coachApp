import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

const BrowseKnowledge = () => <div>Browse Knowledge Page <Link to="/knowledge/4"> Aqui </Link></div>;
const KnowledgePage = () => <div>Single ledge Page</div>;

export default class KnowledgeLayout extends Component {
  render() {
    return (
    	<div>
    		<Switch>
    			<Route path="/knowledge" exact component={BrowseKnowledge} />
    			<Route path="/knowledge/:id" component={KnowledgePage} />
			</Switch>
		</div>
    );
  }
}