import React from 'react';
import './MapBlock.scss';

import { Data } from '../../Types/database_data';
import {
  MapContainer,
  TileLayer,
  Marker,
} from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';

import { Modal } from '../Modal/Modal';

type Props = {
  data: Data[];
  coords: LatLngLiteral;
  activeId: number;
  isModalOpen: boolean;
  onMarkerClick: () => void;
  onCloseModal: () => void;
};

export const MapBlock: React.FC<Props> = ({
  coords,
  data,
  activeId,
  isModalOpen,
  onMarkerClick,
  onCloseModal,
}) => {
  const position: LatLngLiteral = { lat: 50.4501, lng: 30.5234 };
  const place = data.find(item => item.id === activeId);

  return (
    <>
      {isModalOpen
        ? (
            <Modal isOpen={isModalOpen} onClose={onCloseModal}>
              <div className='content'>
                <h1>{place?.name}</h1>

                <img
                  src={place?.photo}
                  alt="place_photo"
                  className='modal__image'
                />

                <p>{place?.description}</p>
              </div>
            </Modal>
        )
        : (
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {(coords.lat !== 0 && coords.lng !== 0) && (
            <Marker
              position={coords}
              eventHandlers={{ click: onMarkerClick }}
            />
          )}
          </MapContainer>
        )}
    </>
  );
};
