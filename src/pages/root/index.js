var React = require('react');
var {
  RouteHandler,
  Link
} = require('react-router');

var AppStore = require('app/store');

var Root = React.createClass({

  render: function () {
    return (
      <div>
        <h1>Root</h1>
        <Link to="something">Link to something</Link>
        <RouteHandler {...this.state}/>
      </div>
    );
  },

  getInitialState: function () {
    var initialAppState;
    if (this.props.initialAppState) {
      initialAppState = this.props.initialAppState;
    } else {
      initialAppState = AppStore.getAppState();
    }
    return {
      appState: initialAppState
    };
  },

  onStoreChange: function () {
    this.setState({
      appState: AppStore.getAppState()
    });
  },

  componentDidMount: function () {
    AppStore.addChangeListener(this.onStoreChange);
  },

  componentWillUnmount: function () {
    AppStore.removeChangeListener(this.onStoreChange);
  }

});

module.exports = Root;
