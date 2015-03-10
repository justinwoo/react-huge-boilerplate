var {EventEmitter} = require('events');
var assign = require('object-assign');

var AppDispatcher = require('./dispatcher');
var AppConstants = require('./constants');
var DefaultState = require('./state');

var SomethingFunctions = require('functions/something-functions');

var CHANGE_EVENT = 'change';

/**
 * Set the app state to the default state on start
 * then set a new app state each time we do an update
 */
var appState = DefaultState;

/**
 * Provides the store for the application
 */
var AppStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the application state
   * @return {object}
   */
  getAppState: function() {
    return appState;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * Add a callback for change events
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Remove a callback for change events
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/**
 * Register callbacks for dispatched actions
 */
AppDispatcher.register(function (action) {

  if (action.type === AppConstants.SOMETHING) {
    appState = SomethingFunctions.something(appState);
    AppStore.emitChange();
  }

});

module.exports = AppStore;
