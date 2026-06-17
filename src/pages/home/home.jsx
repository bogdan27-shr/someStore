import './home.scss';
import { useState, useEffect } from 'react';
import { req } from '../../api/products.js';
import { ProductCard } from '../../components/productCard/productCard.jsx';

export function Home({search, addToCart, page}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    req().then((data) => {
      setProducts(data);
    }).catch((er) => {
      console.error(er);
    });
  }, []);

  const searchProd = products.filter((one) =>{
    return one.title.toLowerCase().includes(search.toLowerCase());
  });

  if(products.length <= 0){
    return(
      <h2>Load...</h2>
    );
  }

  return(
    <ProductCard 
      search={search} 
      products={search.length > 0 ? searchProd : products.slice(0, 4)}
      addToCart={addToCart}
      page={page}
    />
  );
}