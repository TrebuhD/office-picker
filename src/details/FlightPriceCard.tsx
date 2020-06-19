import React from "react";
import DataCard from "../common/DataCard";
import { LocationName } from "../constants";

import { FlightDestination, Location } from "../types/common";
import useFlightPriceCard from "./useFlightPriceCard";
import "./FlightPriceCard.scss";
import { ReactComponent as LondonIcon } from "../assets/london.svg";
import { ReactComponent as NewYorkIcon } from "../assets/america.svg";
import { ReactComponent as ParisIcon } from "../assets/france.svg";
import { ReactComponent as PlaneIcon } from "../assets/airplane.svg";

interface Props {
  location: Location;
  destination: FlightDestination;
}

function DestinationIcon({ destination }: { destination: FlightDestination }) {
  switch (destination.name) {
    case LocationName.LONDON:
      return <LondonIcon />;
    case LocationName.PARIS:
      return <ParisIcon />;
    case LocationName.NEW_YORK:
      return <NewYorkIcon />;
    default:
      return null;
  }
}

function FlightPriceCard({ location, destination }: Props) {
  const { flightDataLoading, flightDataError, flight } = useFlightPriceCard({
    location,
    destination,
  });

  if (flightDataError) {
    return <div>Error fetching data from the flight API!</div>;
  }

  return (
    <DataCard
      label={`Cheapest flight to ${destination.name}${
        flight ? ` (${flight.distance}km)` : ""
      }:`}
      value={flight ? `€ ${flight.price}` : undefined}
      link={flight ? flight.deep_link : undefined}
      icon={<DestinationIcon destination={destination} />}
      secondaryIcon={<PlaneIcon />}
      loading={flightDataLoading}
    />
  );

  // return <div className="flight-price-card">{destination.name}</div>;
}

export default FlightPriceCard;
