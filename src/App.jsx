import {Header} from './components/header/header.jsx';
import {Home} from './pages/home/home.jsx';
import {Cart} from './pages/cart/cart.jsx';
import {Products} from './pages/products/products.jsx';
import {Footer} from './components/footer/footer.jsx';
import { useEffect, useState } from 'react';

export function App () {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');
  const [viewAllP, setViewAllP] = useState('close');
  const [currProd, setCurrProd] = useState({});
  const [openPay, setOpenPay] = useState(false);
  const [closePay, setClosePay] = useState(false);

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

  useEffect(() => {
    const save = localStorage.getItem('cart');
  
    if(save) setCart(JSON.parse(save));
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  return(
    <>
      <Header
        search={search}
        setSearch={setSearch}
        cart={cart}
        setPage={setPage}
        setViewAllP={setViewAllP}
      />

      {
        (
          page === `home` ||
          page === `search`
        )&&(
          <Home
            search={search}
            addToCart={addToCart}
            page={page}
            setPage={setPage}
            viewAllP={viewAllP}
            setViewAllP={setViewAllP}
            setCurrProd={setCurrProd}
          />
        )
      }

      {
        page === `cart` && (
          <Cart
            cart={cart}
            addToCart={addToCart}
            page={page}
            setPage={setPage}
            deleteC={deleteFromCart}
            setCurrProd={setCurrProd}
            openPay={openPay}
            setOpenPay={setOpenPay}
            closePay={closePay}
            setClosePay={setClosePay}
          />
        )
      }

      {
        page === `one product` && (
          <Products
            currProd={currProd}
            openPay={openPay}
            setOpenPay={setOpenPay}
            closePay={closePay}
            setClosePay={setClosePay}
            addToCart={addToCart}
          />
        )
      }

      <Footer/>
    </>
  );
}