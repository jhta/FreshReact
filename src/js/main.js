var React            = require('react');
var Dispatcher       = require('./dispatchers/dispatcher');
var AppActionTypes   = require('./constants/app-action-types');
var AppActions       = require('./actions/app-actions');
var PostsActionTypes = require('./constants/posts-action-types');
var router           = require('./router/app-router');

window.React = React;

router.run( function ( Handler, state ) {
  AppActions.routeChanged(state);
  React.render( <Handler/>, document.getElementById('main') );
});

Dispatcher.register(function(payload){

  var action = payload.action;

  switch(action.type){
    case PostsActionTypes.LOAD_POST:
      if (action.postId) {
        router.transitionTo( 'post', { postId: action.postId } );
      }else{
        // router.transitionTo('app');
      }
      break;
    default:
      // do nothing;

  }
});