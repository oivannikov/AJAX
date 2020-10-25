import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromServer } from './redux/actions';
import { getProducts } from './api/api';

import Lists from './components/Lists/Lists';

import './App.scss';

function App() {
  const products = useSelector(state => state.app.products);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [sortProducts, setSortProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
    .then(date => dispatch(getProductsFromServer(date.products)));
  }, [dispatch]);

  useEffect(() => {
    setSortProducts(products);
  }, [products]);

  function handeInput(e) {
    const { value } = e.target;
    let sortProductsByName = [];

    e.preventDefault();    
    setSearch(value);

    if (value[0] === ' ') {
      setSearch('');
    }

    sortProductsByName = products.filter(({ name }) =>
      name.includes(value.toLowerCase()) || name.includes(value.toUpperCase()));
    setSortProducts(sortProductsByName);
  }

  return (
    <div className="products">

      <div className="products__buttons">
        <button className="products__get" onClick={() => setShow(true)}>
          Get products
        </button>
        <button className="products__hide" onClick={() => setShow(false)}>
          Hide products
        </button>
        <input
          className="products__search"
          type="text"
          value={search}
          onChange={(e) => handeInput(e)}
        />
      </div>

      { show && <Lists products={sortProducts} /> }
    </div>
  );
}

export default App;
