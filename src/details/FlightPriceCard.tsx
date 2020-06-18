import React from "react";

import { FlightDestination, Location } from "../types/common";
import useFlightPriceCard from "./useFlightPriceCard";
import "./FlightPriceCard.scss";

interface Props {
  location: Location;
  destination: FlightDestination;
}

function FlightPriceCard({ location, destination }: Props) {
  const {
    fetchFlightData,
    flightData,
    flightDataError,
    flightDataLoading,
  } = useFlightPriceCard({ location, destination });

  console.dir(flightData);

  return <div className="flight-price-card">{destination.name}</div>;
}

export default FlightPriceCard;
