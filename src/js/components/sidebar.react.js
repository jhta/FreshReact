var React = require('react');
var Router = require('react-router');

var Link = Router.Link;



var PostsSidebar = React.createClass({

  render() {

    var posts = this.props.posts;

    return (
        <div className='sidebar'>
          <ul>
          {posts.map((post,index)=>{
            return (
              <li key={index}>
                <Link to="post" params={{postId : post.ID}}>{post.title}</Link>
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