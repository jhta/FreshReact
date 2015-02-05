var request = require('superagent');
var postsUrl = 'https://public-api.wordpress.com/rest/v1.1/freshly-pressed/';
var singleUrl = '';

function getPosts(){
  return request.get(postsUrl);
}

module.exports = {
  getPosts,
};