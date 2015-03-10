var AppConstants = require('app/constants');
var AppDispatcher = require('app/dispatcher');

var AppActions = {
  something: function () {
    AppDispatcher.dispatch({
      type: AppConstants.SOMETHING
    });
  }
};

module.exports = AppActions;
