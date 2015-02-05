var Router = require('react-router');
var routes = require('./app-routes');

var router = Router.create({
  routes: routes,
  // location: Router.HistoryLocation
});

window.router = router;

module.exports = router;
