var AppActionTypes = require('../constants/app-action-types');
var Dispatcher = require('../dispatchers/dispatcher');

var AppActions = {
  routeChanged(state){
    Dispatcher.handleRouteAction({type:AppActionTypes.ROUTE_CHANGED,state});
  }
};

module.exports = AppActions;