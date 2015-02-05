var PostsActionTypes = require('../constants/posts-action-types');
var Dispatcher = require('../dispatchers/dispatcher');
var API = require('../api');


var PostsActions = {

  loadPosts(){

    Dispatcher.handleViewAction({
      type : PostsActionTypes.WILL_LOAD_POSTS
    });

    API.getPosts()
      .end(function(err,res){
        if (err) {
          Dispatcher.handleViewAction({
            type : PostsActionTypes.ERROR_LOADING_POSTS
          });
        }else{
          Dispatcher.handleViewAction({
            type  : PostsActionTypes.SET_POSTS,
            posts : res.body.posts
          });
        }
      });

  },

  getPost(postId){
    Dispatcher.handleViewAction({
      type : PostsActionTypes.LOAD_POST,
      postId : postId
    });
  }

};

module.exports = PostsActions;