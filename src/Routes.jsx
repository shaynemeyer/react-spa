var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = require('react-router').IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
  queryKey: false
});

/*
  for more on React Router: https://github.com/rackt/react-router
*/

var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={Base}>
      <IndexRoute component={News} />
      <Route path="/photos" component={Photos} />
    </Route>
  </Router>
);

module.exports = Routes;
