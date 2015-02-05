var Dispatcher        = require('../dispatchers/dispatcher');
var BaseStore         = require('./base-store');
var PostsActionTypes  = require('../constants/posts-action-types');
var PostsActions      = require('../actions/posts-actions');

var assign = require('object-assign');

var _posts = [];
var _currentPost = null;

function _setPosts(posts){
	console.log('posts',posts);
	_posts = posts;
}

function _setCurrentPost( postId ){

  postId = parseInt(postId);

  _posts.forEach(function(post){
    if (post.ID === postId) {
      _currentPost = post;
    }
  });

}

var PostsStore = assign( BaseStore, {

  getPosts(){
    if ( ! _posts.length ) {
        PostsActions.loadPosts();
    }
    return _posts;
  },

	getPost(id) {
    PostsActions.getPost(id);
    return _currentPost;
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