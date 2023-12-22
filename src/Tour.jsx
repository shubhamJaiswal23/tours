import Tours from './Tours';

const Tour = ({ tourData, removeTour }) => {
  return (
    <div className="tours">
      {tourData.map((tour) => {
        return <Tours key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tour;
