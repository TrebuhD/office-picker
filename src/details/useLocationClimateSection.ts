import useAxios from "axios-hooks";
import { useEffect } from "react";

import { Location } from "../types/common";

interface ClimateDataResponse {
  current: {
    humidity: number;
    pressure: number;
    temp: number;
    uvi: number;
  };
}

const climateApiEndpoint = "https://api.openweathermap.org/data/2.5/onecall";

function useLocationClimateSection({ location }: { location: Location }) {
  const [{ data: response, loading, error }, fetchClimateData] = useAxios<
    ClimateDataResponse
  >(climateApiEndpoint, { manual: true });

  const apiKey = process.env.REACT_APP_OWM_API_KEY;

  useEffect(
    function makeRequest() {
      if (!apiKey) {
        console.error(
          "Open Weather Map API key missing. Please fill in the key in the .env.local file."
        );
      }
      fetchClimateData({
        params: {
          appid: apiKey,
          lat: location.latitude,
          lon: location.longitude,
          units: "metric",
          exclude: "hourly,daily",
        },
      });
    },
    [location, fetchClimateData, apiKey]
  );

  return { climateData: response ? response.current : null, loading, error };
}

export default useLocationClimateSection;
