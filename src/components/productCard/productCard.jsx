import './productCard.scss';
import {OneCard} from './oneCard/oneCard';

export function ProductCard ({
  products, 
  search, 
  addToCart, 
  page, 
  setPage, 
  viewAllP, 
  setViewAllP, 
  setCurrProd
}){
  function showT (search, viAll){
    if(page === `search`){
      return `Search results`;
    }else if(viAll === `open`){
      return `All our products`;
    }else{
      return `The best products`;
    }
  }

  if(products.length <= 0){
    return(
      <>
        <main>
          <div className="contForCard">
            <h2>
              There are no products found according to your request
            </h2>
          </div>
        </main>
      </>
    );
  }
  
  return(
    <main>
      <div className="title">
        <h2>
          {showT(page, viewAllP)}
        </h2>
      </div>
      <div className="contForCard">
        {
          products.map((e) => {
            return(
              <OneCard
                key={e.id} 
                info={e}
                addToCart={addToCart}
                page={page}
                setPage={setPage}
                setCurrProd={setCurrProd}
              />
            );
          })
        }
      </div>
      {
        viewAllP === `close` && 
        page === `home` && (
          <button 
            id='viAll'
            onClick={() => {
              setViewAllP(`open`);
            }}
          >
            View all products
          </button>
        )
      }
    </main>
  );
}