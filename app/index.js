var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('react');
require('./index.css');
var App = require('./components/App');

// state
// lifecycle event (hooks)
// UI (the only required)

// App.propTypes = {
//   list: PropTypes.array,
//   list2: PropTypes.arrayOf(PropTypes.object),
//   list3: PropTypes.arrayOf(PropTypes.shape{
//     name: PropTypes.string,
//     friend: PropTypes.bool
//   })),
// }

// Add to the DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
