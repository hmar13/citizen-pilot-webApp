import React, { useState } from 'react';
import './DescriptionTab.css';
import { report } from '../../../types';
import MapContainer from './MapContainer';

type Props = {
  descriptionContainerData: report;
  isClicked: boolean;
};
const DescriptionTab: React.FC<Props> = ({
  descriptionContainerData,
  isClicked,
}) => {
  const { latitude, longitude, description } = descriptionContainerData;

  return (
    <div className="description-container">
      <div className="raised-edge">
        <div className="description-text-container">
          <p className="description-text">{description}</p>
        </div>
        {isClicked ? (
          <MapContainer latitude={latitude} longitude={longitude} />
        ) : (
          <div />
        )}
        <div className="edge-shadow"></div>
      </div>
    </div>
  );
};

export default DescriptionTab;
