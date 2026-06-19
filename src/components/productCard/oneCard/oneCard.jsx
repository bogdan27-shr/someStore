import {useState} from "react";

export function OneCard({
  info,
  addToCart, 
  infoC, 
  page, 
  setPage, 
  deleteC, 
  setCurrProd
}){
  const [openDesc, setOpenDesc] = useState(false);

  if(page === `home`){
    return (
      <>
        <div className={`card ${openDesc ? 'active' : ''}`}>
          <section>

            <img src={info.image} alt={info.title}/>

            <div className="nameProd">
              <h4
                onClick={({target}) => {
                  console.log(target);
                  setPage(`one product`);
                  setCurrProd(info);
                }}
              >
                {info.title}
              </h4>
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

            <div className="imgWrap">
              <div className="pieces">
                <span>{infoC.count}</span>
              </div>
              <img src={infoC.image} alt={infoC.title}/>
            </div>
            
            <div className="nameProd">
              <h4
                onClick={({target}) => {
                  console.log(target);
                  setPage(`one product`);
                  setCurrProd(infoC);
                }}
              >{infoC.title}</h4>
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
                <span>${parseFloat(infoC.count * infoC.price).toFixed(2)}</span>
              </div>
              <div className="deleteFromCart">
                <button 
                  id={infoC.id}
                  onClick={({target}) => {
                    deleteC(parseFloat(target.id));
                  }}
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