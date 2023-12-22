const Tours = (props) => {
  const { image, name, info, price } = props.data;
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button className="delete-btn btn btn-block">not interested</button>
      </div>
    </article>
  );
};

export default Tours;
