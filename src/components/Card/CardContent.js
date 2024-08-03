// src/components/Card/CardContent.js
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const CardContent = ({ children, className }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.defaultProps = {
  className: '',
};

export default CardContent;


