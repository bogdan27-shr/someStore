import './productCard.scss';
import {OneCard} from './oneCard/oneCard';

export function ProductCard ({products}) {
  return(
    <main>
      <div className="title">
        <h2>The best products</h2>
      </div>
      <div className="contForCard">
        {
          products.slice(0, 4).map((e) => {
            return(
              <OneCard key={e.id} info={e}/>
            );
          })
        }
      </div>
    </main>
  );
}