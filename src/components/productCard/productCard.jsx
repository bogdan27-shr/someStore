import './productCard.scss';
import {OneCard} from './oneCard/oneCard';

export function ProductCard ({products, search, addToCart, page}) {
  return(
    <main>
      <div className="title">
        <h2>{search ? `Search results` : `The best products`}</h2>
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
              />
            );
          })
        }
      </div>
    </main>
  );
}