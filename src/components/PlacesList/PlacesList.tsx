import React, { useState } from 'react';
import './PlacesList.scss';

import { Data } from '../../Types/database_data';
import { LatLngLiteral } from 'leaflet';

import { PlacesItem } from '../PlacesItem/PlacesItem';
import { Modal } from '../Modal/Modal';
import { AddFrom } from '../AddFrom/AddForm';

type Props = {
  data: Data[];
  activeId: number;
  isInfoModalOpen: boolean;
  onCoordsChange: (coordsObj: LatLngLiteral) => void;
  onButtonClick: (itemId: number) => void;
}

export const PlacesList: React.FC<Props> = ({
  data,
  activeId,
  isInfoModalOpen,
  onCoordsChange,
  onButtonClick,
}) => {
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  const openModalForm = () => {
    setIsModalFormOpen(true);
  };

  const closeModalForm = () => {
    setIsModalFormOpen(false);
  };

  return (
    <div className="places">
      {data.map(place => (
        <PlacesItem
          key={place.id}
          place={place}
          activeId={activeId}
          isInfoModalOpen={isInfoModalOpen}
          onCoordsChange={onCoordsChange}
          onButtonClick={onButtonClick}
        />
      ))}

      <button
        className='places__add-button button is-info'
        onClick={openModalForm}
        disabled={isInfoModalOpen}
      >
        Add place
      </button>

      {isModalFormOpen && (
        <Modal isOpen={isModalFormOpen} onClose={closeModalForm}>
          <div className='content'>
            <h3>Add place</h3>
            <AddFrom />
          </div>
        </Modal>
      )}
    </div>
  );
};
