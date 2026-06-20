import './products.scss';
import {PayDetails} from '../../components/payDetails/payDetails';

export function Products ({
  currProd, 
  openPay, 
  setOpenPay, 
  closePay, 
  setClosePay, 
  addToCart
}){
  return(
    <>
      <main>
        <div className="contOneProd">
          <div className="oneProd">

            <div className="leftInfo">
              <div className="imfOne">
                <img src={currProd.image} alt={currProd.title}/>
              </div>

              <h3>
                {currProd.title}
              </h3>

              <button
                onClick={() => {
                  setOpenPay(true);
                }}
              >
                Buy now for ${currProd.price.toFixed(2)}
              </button>
            </div>

            <div className="rightInfo">
              <div className="descProd">
                <h4>Description</h4>
                <p>
                  {currProd.description}
                </p>
              </div>
              
              <div className="category">
                <p>
                  Categoty : <span>{currProd.category}</span>
                </p>
              </div>

              <div className="price">
                <p>
                  Price : <span>${currProd.price}</span>
                </p>
              </div>

              <div className="rate">
                <p>
                  Rate : <span>{currProd.rating.rate}</span>
                </p>
              </div>

              <div className="count">
                <p>
                  Quantity in stock : <span>{currProd.rating.count}</span>
                </p>
              </div>

              <button
                onClick={() => addToCart(currProd)}
              >
                Add to Cart
              </button>
            </div>

          </div>
        </div>

        {
          openPay && (
            <PayDetails
              total={currProd.price}
              setOpenPay={setOpenPay}
              closePay={closePay}
              setClosePay={setClosePay}
            />
          )
        }
      </main>
    </>
  );
}