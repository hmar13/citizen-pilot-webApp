import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MAP_KEY } from '../../../config';

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

type mapProps = {
  latitude: number;
  longitude: number;
};

const MapContainer: React.FC<mapProps> = ({ latitude, longitude }) => {
  console.log(MAP_API_KEY);
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey={MAP_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {<Marker key={defaultCenter.lat} position={defaultCenter} />}
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
