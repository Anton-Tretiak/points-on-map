import React, { useEffect, useState } from 'react';
import './App.scss';

import { LatLngLiteral } from 'leaflet';

import { PlacesList } from './components/PlacesList/PlacesList';
import { MapBlock } from './components/MapBlock/MapBlock';

export const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState<LatLngLiteral>({ lat: 0, lng: 0 });
  const [activeId, setActiveId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleButtonClick = (itemId: number) => {
    setActiveId(itemId);
  };

  const handleMarkerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="App__sidebar">
        <PlacesList
          data={data}
          activeId={activeId}
          isModalOpen={isModalOpen}
          onCoordsChange={handleCoordsChange}
          onButtonClick={handleButtonClick}
        />
      </div>

      <div className="App__map">
        <MapBlock
          coords={coords}
          data={data}
          activeId={activeId}
          isModalOpen={isModalOpen}
          onMarkerClick={handleMarkerClick}
          onCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
};
