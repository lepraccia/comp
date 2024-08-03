// src/components/Card/CardHeader.js
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const CardHeader = ({ children, className }) => {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  className: '',
};

export default CardHeader;


