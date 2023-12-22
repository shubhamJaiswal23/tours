import { useState } from 'react';

const Tours = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.slice(0, 200)}...`}
          {readMore ? (
            <button className="info-btn" onClick={() => setReadMore(!readMore)}>
              show less
            </button>
          ) : (
            <button className="info-btn" onClick={() => setReadMore(!readMore)}>
              read more
            </button>
          )}
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tours;
