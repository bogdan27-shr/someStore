import { useState } from "react";

export function OneCard({ info }) {
  console.log(info);

  const [openDesc, setOpenDesc] = useState(false);


  return (
    <>
      <div className="card">
        <img src={info.image} alt={info.title} />
        <div className="nameProd">
          <h4>{info.title}</h4>
        </div>
        <div className={`description ${openDesc ? 'active' : ''}`}>
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}