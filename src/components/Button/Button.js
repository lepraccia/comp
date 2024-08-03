// src/components/Button/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type, disabled, className }) => {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <button
      style={buttonStyle}
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  disabled: false,
  className: '',
};

export default Button;
