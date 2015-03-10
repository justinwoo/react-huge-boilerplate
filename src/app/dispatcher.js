var {Dispatcher} = require('flux');

/**
 * Initializes and exports the dispatcher for the application
 */
var AppDispatcher = new Dispatcher();

module.exports = AppDispatcher;
