const url = 'https://course-api.com/react-tours-project';
import { useState, useEffect } from 'react';
import Tour from './Tour';
import Loading from './Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  const removeTour = (id) => {
    const newTours = tourData.filter((tour) => tour.id != id);
    setTourData(newTours);
  };

  const fetchTourData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTourData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTourData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tourData.length === 0) {
    return (
      <main>
        <div className="title" style={{ margin: '3rem 0' }}>
          <h1>no tours left</h1>
          <button
            className="btn"
            style={{ margin: '3rem 0' }}
            onClick={fetchTourData}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h1>ours Tours</h1>
        <div className="title-underline"></div>
      </div>
      <Tour tourData={tourData} removeTour={removeTour} />
    </main>
  );
};

export default App;
