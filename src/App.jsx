const url = 'https://course-api.com/react-tours-project';
import { useState, useEffect } from 'react';
import Tour from './Tour';
import Loading from './Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTourData(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchTourData();
  }, []);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <section>
          <div>
            <h1 className="title">ours Tours</h1>
            <div className="title-underline"></div>
          </div>
          <Tour tourData={tourData} />
        </section>
      )}
    </main>
  );
};

export default App;
