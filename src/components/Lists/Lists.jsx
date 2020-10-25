import React from 'react';

import PropTypes from 'prop-types';

import './Lists.scss';

function Lists({ products }) {
  return (
    <ul className="lists">
    {
      products.map(product => (
        <li className="lists__item" key={product.updated_at}>
          { product.name }
        </li>
      ))
    }
    </ul>
  );
}

Lists.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    updated_at: PropTypes.number.isRequired,
  })).isRequired
}

export default Lists;