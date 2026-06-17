import {OneCard} from "../../components/productCard/oneCard/oneCard.jsx";

export function Cart ({cart, addToCart, page, deleteC}) {
  const allCart = {};

  cart.forEach((e) => {
    if(allCart[e.id]){
      allCart[e.id].count++;
    }else{
      allCart[e.id] = {
        ...e,
        count: 1
      };
    }
  });
  const carts = Object.values(allCart);

  return(
    <>
      <main>
        <h2>{cart.length > 0 ? 'Your cart' : 'There are no items in your cart...'}</h2>

        <div className="contForCard">
          {
            cart.length > 0 && (
              carts.map((e) => {
                return(
                  <OneCard
                    key={e.id}
                    infoC={e}
                    addToCart={addToCart}
                    page={page}
                    deleteC={deleteC}
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