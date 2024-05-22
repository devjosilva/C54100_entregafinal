import React from 'react';
import PropTypes from 'prop-types';
import './Description.css';

const Description = ({ title, description, price }) => {
  return (
    <div className="product-description">
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Precio: ${price}</h2>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Description;
