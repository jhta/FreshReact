var React         = require('react');
var Router        = require('react-router');

var Route         = Router.Route;
var RouteHandler  = Router.RouteHandler;
var Link          = Router.Link;

var PostsSidebar  = require('./sidebar.react');

var PostsStore    = require('../stores/posts-store');
var PostsActions  = require('../actions/posts-actions');


function cols(n){
  return `medium-${n} columns`;
}

function _getPosts(){
  var posts = PostsStore.getPosts();
  return { posts: posts };
}

var App = React.createClass({

  getInitialState() {
    return _getPosts();
  },

  componentWillMount() {
    PostsStore.addChangeListener(this.onChange);
  },

  componentWillUnmount() {
    PostsStore.removeChangeListener(this.onChange);
  },

  onChange() {
    this.setState( _getPosts() );
  },

  handleReload(){
    PostsActions.loadPosts();
  },

  selectPost(post){
    PostsActions.getPost(post);
  },

  render() {

    return (
      <div className="row">
        <div className={cols(12)}>
          <header>
            <h1 className="header-title">Fresh</h1>
          </header>
        </div>
        <div className={cols(4)}>
          <PostsSidebar
            posts = {this.state.posts}
            onReload = {this.handleReload}
            onSelectPost = {this.selectPost}
          />
        </div>
        <div className={cols(8)}>
          <RouteHandler/>
        </div>
      </div>

    )

  }

});

module.exports = App;