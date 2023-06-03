import React, { useEffect, useState } from 'react';
import './App.scss';

import { PlacesList } from './components/PlacesList/PlacesList';
import { MapBlock } from './components/MapBlock/MapBlock';

export const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try {
      const response = await fetch('http://localhost:5000/data');
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="App">
      <div className="App__sidebar">
        <PlacesList data={data} />
      </div>

      <div className="App__map">
        <MapBlock />
      </div>
    </div>
  );
};
