import './header.scss';

export function Header ({search, setSearch, cart}) {
  return(
    <>
    <header className="header">
      <div className="logo">
        <h1>BEST STORE</h1>
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
        <span className='cartItem'>
          Cart (<span id='countC'>{cart.length}</span>)
        </span>
      </div>
    </header>
    </>
  );
}