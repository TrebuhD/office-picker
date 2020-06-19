import React from "react";
import { flightDestinationData } from "../constants";

import { Location } from "../types/common";
import DetailViewHeader from "./DetailViewHeader";
import "./LocationDetailView.scss";
import FlightPriceCard from "./FlightPriceCard";
import DetailViewSection from "./DetailViewSection";
import LocationClimateSection from "./LocationClimateSection";

interface Props {
  location: Location;
  closeModal: () => void;
}

function LocationDetailView({ location, closeModal }: Props) {
  return (
    <div className="location-detail-view" onKeyPress={() => closeModal()}>
      <DetailViewHeader location={location} />
      <DetailViewSection name="travel" description={location.travelDescription}>
        {flightDestinationData.map((destination) => (
          <FlightPriceCard
            key={destination.name}
            location={location}
            destination={destination}
          />
        ))}
        {/* TODO: add public transport ticket price */}
      </DetailViewSection>
      <LocationClimateSection location={location} />
    </div>
  );
}

export default LocationDetailView;
