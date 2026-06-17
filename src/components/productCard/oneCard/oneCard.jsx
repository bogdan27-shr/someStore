import { useState } from "react";

export function OneCard({info, addToCart, infoC, page}) {
  const [openDesc, setOpenDesc] = useState(false);
  //console.log(cart)

  if(page === `home`){
    return (
      <>
        <div className={`card ${openDesc ? 'active' : ''}`}>
          <section>
            <img src={info.image} alt={info.title}/>
            <div className="nameProd">
              <h4>{info.title}</h4>
            </div>
            <div className={`description`}>
              <p>{info.description}</p>
            </div>
            <button
              className="showMore"
              onClick={() => setOpenDesc(!openDesc)}
            >
              {openDesc ? 'Show less' : 'Show more...'}
            </button>
            <div className="footerCard">
              <div className="price">
                <span>${info.price}</span>
              </div>
              <div className="addCart">
                <button
                  onClick={() => addToCart(info)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }


  if(page === `cart`){
    return (
      <>
        <div className={`card ${openDesc ? 'active' : ''}`}>
          <section>
            {console.log(infoC)}
            <img src={infoC.image} alt={infoC.title}/>
            <div className="nameProd">
              <h4>{infoC.title}</h4>
            </div>
            <div className={`description`}>
              <p>{infoC.description}</p>
            </div>
            <button
              className="showMore"
              onClick={() => setOpenDesc(!openDesc)}
            >
              {openDesc ? 'Show less' : 'Show more...'}
            </button>
            <div className="footerCard">
              <div className="price">
                <span>${infoC.price}</span>
              </div>
              <div className="deleteFromCart">
                <button
                  onClick={() => {}}
                >
                  Delete
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}