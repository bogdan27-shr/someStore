import './productCard.scss';
import {OneCard} from './oneCard/oneCard';

export function ProductCard ({products, search, addToCart, page, setPage, viewAllP, setViewAllP, setCurrProd}){
  function showT (search, viAll){
    if(search.length > 0){
      return `Search results`;
    }else if(viAll === `open`){
      return `All our products`;
    }else{
      return `The best products`;
    }
  }

  return(
    <main>
      <div className="title">
        <h2>
          {showT(search, viewAllP)}
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
        viewAllP === `close` && (
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