var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event (hooks)
// UI (the only required)

class App extends React.Component {
  render() {
    return (
      <div> Hello !! </div>
    );
  }
}

// Add to the DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
