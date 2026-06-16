import {Header} from './components/header/header.jsx';
import {Home} from './pages/home/home.jsx';
import {Footer} from './components/footer/footer.jsx';
import { useState } from 'react';

export function App () {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  let addToCart = (prod) => {
    setCart((prev) => [...prev, prod]);
  }

  return(
    <>
    <Header
      search={search}
      setSearch={setSearch}
      cart={cart}
    />
    <Home
      search={search}
      addToCart={addToCart}
    />
    <Footer/>
    </>
  );
}