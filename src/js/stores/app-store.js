var Dispatcher        = require('../dispatchers/dispatcher');
var BaseStore         = require('./base-store');
var PostsStore        = require('./posts-store');
var AppActionTypes    = require('../constants/app-action-types');
var AppActions        = require('../actions/app-actions');

var assign = require('object-assign');

var _currentPostId = null;

var AppStore = assign( BaseStore, {

  getCurrentPostId(){
    return _currentPostId;
  }

});

AppStore.dispatchToken = Dispatcher.register( function(payload) {

  var action = payload.action;

	switch(action.type){
    case AppActionTypes.ROUTE_CHANGED:
      _currentPostId = action.state.params.postId;
      AppStore.emitChange();
      break;
		default:
			// do nothing;
	}

});

module.exports = AppStore;