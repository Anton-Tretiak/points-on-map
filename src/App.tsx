import React, { useEffect, useState } from 'react';
import './App.scss';

import { LatLngLiteral } from 'leaflet';

import { PlacesList } from './components/PlacesList/PlacesList';
import { MapBlock } from './components/MapBlock/MapBlock';

export const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState<LatLngLiteral>({ lat: 0, lng: 0 });

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

  const handleCoordsChange = (coordsObj: LatLngLiteral) => {
    setCoords(coordsObj);
  };

  return (
    <div className="App">
      <div className="App__sidebar">
        <PlacesList
          data={data}
          onCoordsChange={handleCoordsChange}
        />
      </div>

      <div className="App__map">
        <MapBlock coords={coords} />
      </div>
    </div>
  );
};
