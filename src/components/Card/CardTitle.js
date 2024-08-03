// src/components/Card/CardTitle.js
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const CardTitle = ({ children, className }) => {
  return (
    <h2 className={`card-title ${className}`}>
      {children}
    </h2>
  );
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardTitle.defaultProps = {
  className: '',
};

export default CardTitle;


