var React = require('react');
var {run} = require('react-router');

var Routes = require('./app/routes');

run(Routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
