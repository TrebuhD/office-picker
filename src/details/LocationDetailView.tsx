import React from "react";
import { flightDestinationData } from "../constants";

import { Location } from "../types/common";
import DetailViewHeader from "./DetailViewHeader";
import "./LocationDetailView.scss";
import FlightPriceCard from "./FlightPriceCard";

interface Props {
  location: Location;
  closeModal: () => void;
}

function DetailViewSection({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <section className="location-detail-view__section">
      <h3 className="location-detail-view__section-header">{name}</h3>
      {children}
    </section>
  );
}

function LocationDetailView({ location, closeModal }: Props) {
  return (
    <div className="location-detail-view" onKeyPress={() => closeModal()}>
      <DetailViewHeader location={location} />
      <DetailViewSection name="travel">
        {flightDestinationData.map((destination) => (
          <FlightPriceCard
            key={destination.name}
            location={location}
            destination={destination}
          />
        ))}
      </DetailViewSection>
    </div>
  );
}

export default LocationDetailView;
