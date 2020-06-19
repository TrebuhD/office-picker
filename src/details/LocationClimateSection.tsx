import React from "react";

import DataCard from "../common/DataCard";
import LoadingSpinner from "../common/LoadingSpinner";
import { Location } from "../types/common";
import DetailViewSection from "./DetailViewSection";
import useLocationClimateSection from "./useLocationClimateSection";

interface Props {
  location: Location;
}

function LocationClimateSection({ location }: Props) {
  const { loading } = useLocationClimateSection({ location });

  return (
    <DetailViewSection
      loading={loading}
      name="climate"
      description={location.climateDescription}
    >
      {/*<DataCard label={"Current temperature"} />*/}
    </DetailViewSection>
  );
}

export default LocationClimateSection;
