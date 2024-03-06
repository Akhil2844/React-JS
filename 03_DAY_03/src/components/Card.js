import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour_price">${price}</h4>
          <h4 className="tour_name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show less` : `Read more`}
          </span>
        </div>
      </div>
      <button className="Buttonred" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}
export default Card;
