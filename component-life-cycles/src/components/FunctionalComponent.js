import React from 'react';
import PropTypes from 'prop-types';

const Header = props => { // yes props, yes validate props
  const {
    title = 'Im functional component',
    url = 'http://localhost:3000'
  } = props;

  return (
    <header className="Header">
      <a href={url}>Link</a>
      <h1>{title}</h1>
    </header>
  );
};

// functional component do not have render method.
// functional component do not have state.
// functional component do not have component lifecicle methods.
// can be used for static html.

export default Header;
