import React from "react";

import { Location } from "../types/common";

interface Props {
  location?: Location;
}

function LocationDetailView({ location }: Props) {
  if (!location) {
    return null;
  }

  return (
    <div>
      <h1>{location.name}</h1>
    </div>
  );
}

export default LocationDetailView;
