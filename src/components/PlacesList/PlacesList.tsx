import React from 'react';

import './PlacesList.scss';

import { Data } from '../../Types/database_data';

type Props = {
  data: Data[];
}

export const PlacesList: React.FC<Props> = ({ data }) => {
  return (
    <div className="places">
      {data.map(place => (
        <div key={place.id} className='box'>
          <div className='wrapper'>
            <div className='places__container'>
              <h1>{place.name}</h1>

              <div className='places__buttons'>
                <button className='button is-primary is-small'>
                  Show on the map
                </button>

                <button className='button is-danger is-small'>
                  Hide
                </button>
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
      ))}
    </div>
  );
};
