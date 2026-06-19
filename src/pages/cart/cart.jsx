import {OneCard} from "../../components/productCard/oneCard/oneCard.jsx";
import {TotalPrice} from "./totalPrice/totalPrice.jsx";

export function Cart ({
  cart, 
  addToCart, 
  page, 
  setPage, 
  deleteC, 
  setCurrProd, 
  openPay, 
  setOpenPay, 
  closePay, 
  setClosePay
}){
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
                    setPage={setPage}
                    deleteC={deleteC}
                    setCurrProd={setCurrProd}
                  />
                );
              })
            )
          }
        </div>
        
        <TotalPrice
          cart={cart}
          openPay={openPay}
          setOpenPay={setOpenPay}
          closePay={closePay}
          setClosePay={setClosePay}
        />
      </main>
    </>
  );
}