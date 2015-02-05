var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Dashboard = React.createClass({

	render(){

		return (
			<div className="row">
				<h1>This is the dashboard!</h1>
			</div>
		)

	}

});

module.exports = Dashboard;