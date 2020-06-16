import React from "react";

import { Location } from "../types/common";
import "./LocationDetailView.scss";

interface Props {
  location?: Location;
  closeModal: () => void;
}

function LocationDetailView({ location, closeModal }: Props) {
  if (!location) {
    return null;
  }

  return (
    <div className="location-detail-view" onKeyPress={() => closeModal()}>
      <header className="location-detail-view__image-header">
        <div
          className="location-detail-view__image"
          style={{ backgroundImage: `url(${location.altImageUrl})` }}
        />
        <div className="location-detail-view__image-overlay" />
        <h1 className="location-detail-view__location-name">{location.name}</h1>
      </header>
      <button onClick={closeModal}>close</button>
    </div>
  );
}

export default LocationDetailView;
