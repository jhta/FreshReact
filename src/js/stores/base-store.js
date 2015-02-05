var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

function addChangeListener(callback){
  this.on(CHANGE_EVENT, callback);
}

function removeChangeListener(callback){
  this.removeListener(CHANGE_EVENT, callback);
}

function emitChange(){
  this.emit(CHANGE_EVENT);
}

var BaseStore = assign( EventEmitter.prototype, {
	addChangeListener,
	removeChangeListener,
	emitChange
});


module.exports = BaseStore;