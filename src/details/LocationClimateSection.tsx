import React from "react";

import DataCard from "../common/DataCard";
import { Location } from "../types/common";
import DetailViewSection from "./DetailViewSection";
import useLocationClimateSection from "./useLocationClimateSection";
import { ReactComponent as TempIcon } from "../assets/icons/temp.svg";
import { ReactComponent as HumidityIcon } from "../assets/icons/humidity.svg";
import { ReactComponent as PressureIcon } from "../assets/icons/pressure.svg";
import { ReactComponent as UviIcon } from "../assets/icons/uvi.svg";
import { ReactComponent as WeatherIcon } from "../assets/icons/weather.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as RainIcon } from "../assets/icons/rain.svg";

interface Props {
  location: Location;
}

function LocationClimateSection({ location }: Props) {
  const { loading, climateData } = useLocationClimateSection({ location });

  return (
    <DetailViewSection name="climate" description={location.climateDescription}>
      <DataCard
        label={"Average annual temperature"}
        value={`${location.avgAnnualTemp} °C`}
        icon={<TempIcon />}
        secondaryIcon={<WeatherIcon />}
      />
      <DataCard
        label={"Average annual sunshine"}
        value={`${location.avgSunshineHours} hours`}
        icon={<SunIcon />}
        secondaryIcon={<WeatherIcon />}
      />
      <DataCard
        label={"Average annual rainfall"}
        value={`${location.avgRainfall} mm`}
        icon={<RainIcon />}
        secondaryIcon={<WeatherIcon />}
      />
      <DataCard
        label={"Current Humidity"}
        value={climateData ? `${climateData.humidity} %` : undefined}
        loading={loading}
        icon={<HumidityIcon />}
        secondaryIcon={<WeatherIcon />}
      />
      <DataCard
        label={"Current Air pressure"}
        value={climateData ? `${climateData.pressure} hPa` : undefined}
        loading={loading}
        icon={<PressureIcon />}
        secondaryIcon={<WeatherIcon />}
      />
      <DataCard
        label={"Current UV Index"}
        value={climateData ? `${climateData.uvi}` : undefined}
        loading={loading}
        icon={<UviIcon />}
        secondaryIcon={<WeatherIcon />}
      />
      <DataCard
        label={"Current Temperature"}
        value={climateData ? `${climateData.temp} °C` : undefined}
        loading={loading}
        icon={<TempIcon />}
        secondaryIcon={<WeatherIcon />}
      />
    </DetailViewSection>
  );
}

export default LocationClimateSection;
