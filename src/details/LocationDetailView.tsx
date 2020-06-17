import React from "react";

import { Location } from "../types/common";
import DetailViewHeader from "./DetailViewHeader";
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
      <DetailViewHeader location={location} />
    </div>
  );
}

export default LocationDetailView;
