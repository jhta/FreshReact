var Dispatcher        = require('../dispatchers/dispatcher');
var BaseStore         = require('./base-store');
var PostsActionTypes  = require('../constants/posts-action-types');
var PostsActions      = require('../actions/posts-actions');

var assign = require('object-assign');
var _      = require('lodash');

var _posts = [];

function _setPosts(posts){
	console.log('posts',posts);
	_posts = posts;
}

var PostsStore = assign( BaseStore, {

  getPosts(){
    if ( ! _posts.length ) {
        PostsActions.loadPosts();
    }
    return _posts;
  },

	getPost(id) {
    var post = _.find(_posts,function(post){
      return post.ID == parseInt(id,10);
    });
    return post;
  }

});

PostsStore.dispatchToken = Dispatcher.register( function(payload) {

  var action = payload.action;

	switch(action.type){
    case PostsActionTypes.SET_POSTS:
      _setPosts(payload.action.posts);
      PostsStore.emitChange();
      break;
		default:
			// do nothing;
	}


});

module.exports = PostsStore;