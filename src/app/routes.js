var React = require('react');
var {Route} = require('react-router');

var Root = require('pages/root');
var Something = require('pages/root/something');

/**
 * Provide React-Router routes for the application
 */
var Routes = (
  <Route handler={Root} path="/">
    <Route name="something" handler={Something} />
  </Route>
);

module.exports = Routes;
