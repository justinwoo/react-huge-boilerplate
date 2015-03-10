var SomethingFunctions = {

  /**
   * function for SOMETHING
   * @param {object} appState
   * @return {object} newAppState
   */
  something: function (appState) {
    var newAppState = appState.merge({
      something: appState.get('something') + 1
    });

    return newAppState;
  }

};

module.exports = SomethingFunctions;
