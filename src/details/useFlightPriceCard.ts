import useAxios from "axios-hooks";
import { useEffect } from "react";

import { FlightDestination, Location } from "../types/common";

// https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3

const flightsApiEndpoint = "https://api.skypicker.com/flights";

interface Props {
  location: Location;
  destination: FlightDestination;
}

function useFlightPriceCard({ location, destination }: Props) {
  const [
    { data, loading, error },
    fetchFlightData,
  ] = useAxios(flightsApiEndpoint, { manual: true });

  useEffect(
    function getFlights() {
      fetchFlightData({});
    },
    [location, destination, fetchFlightData]
  );

  return {
    flightData: data,
    flightDataLoading: loading,
    flightDataError: error,
    fetchFlightData,
  };
}

export default useFlightPriceCard;
