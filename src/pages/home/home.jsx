import './home.scss';
import { useState, useEffect } from 'react';
import {req} from '../../api/products.js';
import {ProductCard} from '../../components/productCard/productCard.jsx';

export function Home () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    req().then((data) => {
      setProducts(data);
    });
  }, []);

  //console.log(products);

  return(
    <ProductCard products={products}/>
  );
}