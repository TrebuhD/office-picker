import useAxios from "axios-hooks";
import { useEffect } from "react";

// https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3

const flightsApiEndpoint = "https://api.skypicker.com/flights";

function useLocationDetailsView() {
  const [
    { data, loading, error },
    fetchFlightData,
  ] = useAxios(flightsApiEndpoint, { manual: true });

  return {
    flightData: data,
    flightDataLoading: loading,
    flightDataError: error,
    fetchFlightData,
  };
}

export default useLocationDetailsView;
