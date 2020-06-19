import useAxios from "axios-hooks";
import { useEffect } from "react";

import { FlightDestination, Location } from "../types/common";

const flightsApiEndpoint = "https://api.skypicker.com/flights";

interface Props {
  location: Location;
  destination: FlightDestination;
}

interface Flight {
  price: number;
  deep_link: string;
  fly_duration: string;
  distance: number;
}

function getCheapestFlight(data: Array<Flight>) {
  const sortedData = data.sort((a, b) => a.price - b.price);
  return sortedData[0];
}

function useFlightPriceCard({ location, destination }: Props) {
  const [{ data: response, loading, error }, fetchFlightData] = useAxios<{
    data: Array<Flight>;
  }>(flightsApiEndpoint, { manual: true });

  useEffect(
    function makeRequest() {
      fetchFlightData({
        params: {
          fly_from: location.airportCode,
          fly_to: destination.airportCode,
          partner: "picky",
          v: 3,
          limit: 10,
        },
      });
    },
    [location, destination, fetchFlightData]
  );

  useEffect(
    function handleFetchError() {
      // todo: improve error handling
      if (error) {
        console.log("error fetching data from flight API: ", error);
      }
    },
    [error]
  );

  return {
    flight: response ? getCheapestFlight(response.data) : null,
    flightDataLoading: loading,
    flightDataError: error,
  };
}

export default useFlightPriceCard;
