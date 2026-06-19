import './header.scss';
import cartIcon from '../../img/cart.svg';

export function Header ({
  search, 
  setSearch, 
  cart, 
  setPage, 
  setViewAllP
}){
  return(
    <>
      <header className="header">
        <div className="logo">
          <h1
            onClick={() => {
              setPage('home');
              setViewAllP(`close`);
            }}
          >
            BEST STORE
          </h1>
        </div>
        <div className="search">
          <input
            value={search} 
            onChange={(e) => {
              setSearch(e.target.value);
              setViewAllP(`close`);
            }}
            type="text" 
            id="searchHeader" 
            placeholder='Search products...'
          />
        </div>
        <div className="cartStore">
          <span
            className='cartItem'
            onClick={() => {
              setPage('cart');
            }}
          >
            <img src={cartIcon} alt="Cart"/>
            {cart.length > 0 ? <span id='countC'>({cart.length})</span> : ''}
          </span>
        </div>
      </header>
    </>
  );
}