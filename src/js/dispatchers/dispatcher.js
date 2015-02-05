var Dispatcher = require('flux').Dispatcher;
var assign  = require('object-assign');

var Dispatcher = assign( new Dispatcher(), {

  handleRouteAction(action) {

    var payload = {
      source : 'ROUTE_ACTION',
      action : action
    }

    this.dispatch(payload);

  },

  handleServerAction(action) {

    var payload = {
      source : 'SERVER_ACTION',
      action : action
    }

    this.dispatch(payload);

  },

  handleViewAction(action) {

    var payload = {
      source : 'VIEW_ACTION',
      action : action
    }

    this.dispatch(payload);

  }

})

module.exports = Dispatcher;