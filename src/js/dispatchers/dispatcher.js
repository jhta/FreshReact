var Dispatcher = require('flux').Dispatcher;
var assign  = require('object-assign');

var n = 0;

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

    n++;
    console.log(`dispatch #${n}`,action.type);

    var payload = {
      source : 'VIEW_ACTION',
      action : action
    }

    this.dispatch(payload);

  }

})

module.exports = Dispatcher;