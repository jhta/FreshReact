var React = require('react');
var Router = require('react-router');

var Link = Router.Link;



var PostsSidebar = React.createClass({

  selectPost(post){

    var props = this.props;

    return function(e){
      e.preventDefault();
      e.stopPropagation();
      props.onSelectPost(post.ID);
    }

  },

  render() {

    var posts = this.props.posts;

    return (
        <div className='sidebar'>
          <ul>
          {posts.map((post,index)=>{
            return (
              <li key={post.ID}>
                <a href="#" onClick={this.selectPost(post)}>{post.title}</a>
              </li>
            );
          })}
          </ul>
          <a href="#" onClick={this.props.onReload} className="button">reload</a>
        </div>

    )

  }

});


module.exports = PostsSidebar;