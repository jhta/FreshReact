var request = require('superagent');
var postsUrl = 'https://public-api.wordpress.com/rest/v1.1/freshly-pressed/';
var singleUrl = '';

function getPosts(cb){
  return request.get(postsUrl).end(cb);
}

var mockPosts = null;

function getMockPosts(cb){
	mockPosts = mockPosts || require('./mock-request');
	var res = {
		body : {posts:mockPosts}
	}
	return cb(null,res);
}

module.exports = {
  getPosts,
  getMockPosts,
};