// src/components/Input/Input.js
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, value, onChange, placeholder, className, disabled }) => {
  return (
    <input
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  disabled: false,
};

export default Input;
