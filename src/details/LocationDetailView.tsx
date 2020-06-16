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
      <h1>{location.name}≤</h1>
      <button onClick={closeModal}>close</button>
    </div>
  );
}

export default LocationDetailView;
