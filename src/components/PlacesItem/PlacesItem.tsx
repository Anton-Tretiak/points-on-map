import React from 'react';
import './PlacesItem.scss';

import { Data } from '../../Types/database_data';
import { LatLngLiteral } from 'leaflet';

type Props = {
  place: Data;
  onCoordsChange: (coordsObj: LatLngLiteral) => void;
  activeId: number;
  onButtonClick: (itemId: number) => void;
};

export const PlacesItem: React.FC<Props> = ({
  place,
  onCoordsChange,
  activeId,
  onButtonClick,
}) => {
  return (
    <div className='box'>
      <div className='wrapper'>
        <div className='places__container'>
          <h1>{place.name}</h1>

          <div className='places__buttons'>
              {activeId === place.id
                ? (
                  <button
                    id='modifiedButton'
                    className='button is-danger is-small'
                    onClick={() => {
                      onCoordsChange({ lat: 0, lng: 0 });

                      onButtonClick(0);
                    }}
                  >
                    Hide
                  </button>
                )
                : (
                  <button
                    id='modifiedButton'
                    className='button is-primary is-small'
                    onClick={() => {
                      onCoordsChange({
                        lat: Number(place.latitude),
                        lng: Number(place.longitude),
                      });

                      onButtonClick(place.id);
                    }}
                  >
                    Show on the map
                  </button>
                )}
          </div>
        </div>

        <a href={place.photo} target='_blank'>
          <img
            src={place.photo}
            alt={place.name}
            className="places__photo"
          />
        </a>
      </div>
    </div>
  );
};
