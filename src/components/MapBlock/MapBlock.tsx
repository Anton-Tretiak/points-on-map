import React from 'react';
import './MapBlock.scss';

import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';

export const MapBlock: React.FC = () => {
  return (
    <MapContainer
      center={[50.4501, 30.5234]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
