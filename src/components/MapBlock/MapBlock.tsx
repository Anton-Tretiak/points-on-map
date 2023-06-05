import React from 'react';
import './MapBlock.scss';

import {
  MapContainer,
  TileLayer,
  Marker,
} from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';

type Props = {
  coords: LatLngLiteral;
};

export const MapBlock: React.FC<Props> = ({ coords }) => {
  const position: LatLngLiteral = { lat: 50.4501, lng: 30.5234 };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {(coords.lat !== 0 && coords.lng !== 0) && <Marker position={coords} />}
    </MapContainer>
  );
};
