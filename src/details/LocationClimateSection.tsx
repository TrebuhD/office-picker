import React from "react";

import DataCard from "../common/DataCard";
import { Location } from "../types/common";
import DetailViewSection from "./DetailViewSection";
import useLocationClimateSection from "./useLocationClimateSection";
import { ReactComponent as TempIcon } from "../assets/temp.svg";
import { ReactComponent as HumidityIcon } from "../assets/humidity.svg";
import { ReactComponent as PressureIcon } from "../assets/pressure.svg";
import { ReactComponent as UviIcon } from "../assets/uvi.svg";

interface Props {
  location: Location;
}

function LocationClimateSection({ location }: Props) {
  const { loading, climateData } = useLocationClimateSection({ location });

  console.log({ climateData });

  return (
    <DetailViewSection name="climate" description={location.climateDescription}>
      <DataCard
        label={"Temperature"}
        value={climateData ? `${climateData.temp} °C` : undefined}
        loading={loading}
        icon={<TempIcon />}
      />
      <DataCard
        label={"Humidity"}
        value={climateData ? `${climateData.humidity} %` : undefined}
        loading={loading}
        icon={<HumidityIcon />}
      />
      <DataCard
        label={"Air pressure"}
        value={climateData ? `${climateData.pressure} hPa` : undefined}
        loading={loading}
        icon={<PressureIcon />}
      />
      <DataCard
        label={"UV Index"}
        value={climateData ? `${climateData.uvi}` : undefined}
        loading={loading}
        icon={<UviIcon />}
      />
      {/* TODO: Add avg annual sunshine hours card */}
      {/* TODO: Add avg annual temp card */}
      {/* TODO: Add avg rainfall days card */}
    </DetailViewSection>
  );
}

export default LocationClimateSection;
