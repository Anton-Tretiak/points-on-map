import React from 'react';
import './PlacesList.scss';

import { Data } from '../../Types/database_data';
import { LatLngLiteral } from 'leaflet';

import { PlacesItem } from '../PlacesItem/PlacesItem';

type Props = {
  data: Data[];
  activeId: number;
  isModalOpen: boolean;
  onCoordsChange: (coordsObj: LatLngLiteral) => void;
  onButtonClick: (itemId: number) => void;
}

export const PlacesList: React.FC<Props> = ({
  data,
  activeId,
  isModalOpen,
  onCoordsChange,
  onButtonClick,
}) => {
  return (
    <div className="places">
      {data.map(place => (
        <PlacesItem
          key={place.id}
          place={place}
          activeId={activeId}
          isModalOpen={isModalOpen}
          onCoordsChange={onCoordsChange}
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
};
