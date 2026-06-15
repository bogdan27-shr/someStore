import './header.scss';

export function Header () {
  return(
    <>
    <header className="header">
      <div className="logo">
        <h1>BEST STORE</h1>
      </div>
      <div className="search">
        <input type="text" id="searchHeader" placeholder='Search products...'/>
      </div>
      <div className="cartStore">
        <span className='cartItem'>
          Cart (<span id='countC'>0</span>)
        </span>
      </div>
    </header>
    </>
  );
}