var React = require('react');
// Link -> will render an anchor tag
// Nav link -> will render an anchor tag, but this can allow style based on route
var NavLink = require('react-router-dom').NavLink;

// exact -> only applies the class when exactly that route
function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
