var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');
var Switch = ReactRouter.Switch;

// Last route for error when go to a non-existing page

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/popular' component={Popular}/>
            <Route exact path='/battle' component={Battle}/>
            <Route path='/battle/results' component={Results}/>
            <Route render={function(){
              return(<p>not found</p>)
            }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
