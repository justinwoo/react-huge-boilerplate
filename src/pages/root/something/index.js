var React = require('react');

var AppActions = require('app/actions');

var Something = React.createClass({

  render: function () {
    var something = this.props.appState.get('something');
    return (
      <div>
        <h2>Something: {something}</h2>
        <button onClick={this.handleSomething}>do something</button>
      </div>
    );
  },

  handleSomething: function () {
    AppActions.something();
  }

});

module.exports = Something;
