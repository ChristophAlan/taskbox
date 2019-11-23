import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button onClick={props.onClick} style={props.style}>
    {props.label && <span>{props.label}</span>}
  </button>
)
export default Button;
