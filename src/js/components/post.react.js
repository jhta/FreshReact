var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var PostsStore  = require('../stores/posts-store');
var AppStore    = require('../stores/app-store');

function _getPost(id){
  var postId = AppStore.getCurrentPostId();
  var post = PostsStore.getPost(postId);
  return {post};
}

var Post = React.createClass({

  getInitialState() {
    return _getPost();
  },

  componentWillMount() {
    AppStore.addChangeListener(this.onChange);
  },

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  },

  onChange() {
    this.setState( _getPost() );
  },

  render(){

    var post = this.state.post;

    if ( ! post ) {
      return null;
    }

    return (
      <div className="post">
        <h1 className="post__title">{post.title}</h1>
        <div className="post__content">
          <div
          className="post__content__inner"
          dangerouslySetInnerHTML={{
            __html: post.content
          }}/>

        </div>
      </div>
    )

  }

});

module.exports = Post;