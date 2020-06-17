import React from "react";

import { Location } from "../types/common";

interface Props {
  location: Location;
}

function DetailViewHeader({ location }: Props) {
  return (
    <header className="location-detail-view__image-header">
      <div
        className="location-detail-view__image"
        style={{ backgroundImage: `url(${location.altImageUrl})` }}
      />
      <div className="location-detail-view__image-overlay" />
      <h1 className="location-detail-view__location-name">{location.name}</h1>
    </header>
  );
}

export default React.memo(DetailViewHeader);
