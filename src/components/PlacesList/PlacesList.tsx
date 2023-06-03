import React from 'react';
import './PlacesList.scss';

import { PlacesItem } from '../PlacesItem/PlacesItem';

import { Data } from '../../Types/database_data';

type Props = {
  data: Data[];
}

export const PlacesList: React.FC<Props> = ({ data }) => {
  return (
    <div className="places">
      {data.map(place => (
        <PlacesItem
          place={place}
        />
      ))}
    </div>
  );
};
