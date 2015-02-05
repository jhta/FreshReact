var React = require('react');

var Router        = require('react-router');
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;


var App           = require('../components/app.react');
var Post          = require('../components/post.react');
var Dashboard     = require('../components/dashboard.react');


var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name='post' path=":postId" handler={Post} />
		<DefaultRoute handler={Dashboard}/>
	</Route>
);

module.exports = routes;