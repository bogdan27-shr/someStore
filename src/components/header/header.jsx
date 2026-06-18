import './header.scss';

export function Header ({search, setSearch, cart, setPage}) {
  return(
    <>
    <header className="header">
      <div className="logo">
        <h1
          onClick={() => {setPage('home')}}
        >
          BEST STORE
        </h1>
      </div>
      <div className="search">
        <input
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          type="text" 
          id="searchHeader" 
          placeholder='Search products...'
        />
      </div>
      <div className="cartStore">
        <span
          className='cartItem'
          onClick={() => {setPage('cart')}}
        >
          <img src="src\img\cart.svg" alt="Cart"/>
          {cart.length > 0 ? <span id='countC'>({cart.length})</span> : ''}
        </span>
      </div>
    </header>
    </>
  );
}