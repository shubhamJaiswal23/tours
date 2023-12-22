import Tours from './Tours';

const Tour = ({ tourData }) => {
  return (
    <div className="tours">
      {tourData.map((tour) => {
        return <Tours key={tour.id} data={tour} />;
      })}
    </div>
  );
};

export default Tour;
