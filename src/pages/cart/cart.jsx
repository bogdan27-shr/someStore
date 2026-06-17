import {OneCard} from "../../components/productCard/oneCard/oneCard.jsx";

export function Cart ({cart, addToCart, page}) {
  console.log(page)
  return(
    <>
      <main>
        <h2>{cart.length > 0 ? 'Your cart' : 'There are no items in your cart'}</h2>

        <div className="contForCard">
          {
            cart.length > 0 && (
              cart.map((e) => {
                return(
                  <OneCard
                    key={e.id}
                    infoC={e}
                    addToCart={addToCart}
                    page={page}
                  />
                );
              })
              
            )
          }
        </div>
      </main>
    </>
  );
}