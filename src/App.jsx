import {Header} from './components/header/header.jsx';
import {Home} from './pages/home/home.jsx';
import {Cart} from './pages/cart/cart.jsx';
import {Footer} from './components/footer/footer.jsx';
import { useEffect, useState } from 'react';

export function App () {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');

  let addToCart = (prod) => {
    setCart((prev) => [...prev, prod]);
  }
  let deleteFromCart = (id) => {
    let newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);

    if(index !== -1){
      newCart.splice(index, 1);
    }
    setCart(newCart);
  }

  if(cart <= 0){
    useEffect(() => {
      const save = localStorage.getItem('cart');
  
      if(save) setCart(JSON.parse(save));
    }, []);
  }else{
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  }
  
  return(
    <>
    <Header
      search={search}
      setSearch={setSearch}
      cart={cart}
      setPage={setPage}
    />

    {
      page === `home` && (
        <Home
          search={search}
          addToCart={addToCart}
          page={page}
        />
      )
    }

    {
      page === `cart` && (
        <Cart
          cart={cart}
          addToCart={addToCart}
          page={page}
          deleteC={deleteFromCart}
        />
      )
    }

    <Footer/>
    </>
  );
}