import React, { useState } from 'react';
import './PlacesList.scss';

import { Data } from '../../Types/database_data';
import { LatLngLiteral } from 'leaflet';

import { PlacesItem } from '../PlacesItem/PlacesItem';

type Props = {
  data: Data[];
  onCoordsChange: (coordsObj: LatLngLiteral) => void;
}

export const PlacesList: React.FC<Props> = ({ data, onCoordsChange }) => {
  const [activeId, setActiveId] = useState(0);

  const handleButtonClick = (itemId: number) => {
    setActiveId(itemId);
  };

  return (
    <div className="places">
      {data.map(place => (
        <PlacesItem
          key={place.id}
          place={place}
          onCoordsChange={onCoordsChange}
          activeId={activeId}
          onButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
};
