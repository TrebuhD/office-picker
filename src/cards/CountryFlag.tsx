import React from "react";

import { LocationName } from "../constants";
import { ReactComponent as SpainFlag } from "../assets/flag_es.svg";
import { ReactComponent as NetherlandsFlag } from "../assets/flag_nl.svg";
import { ReactComponent as HungaryFlag } from "../assets/flag_hg.svg";
import "./CountryFlag.scss";

interface Props {
  locationName: string;
}

function CountryFlag({ locationName }: Props) {
  switch (locationName) {
    case LocationName.MADRID:
      return <SpainFlag className="country-flag" />;
    case LocationName.AMSTERDAM:
      return <NetherlandsFlag className="country-flag" />;
    case LocationName.BUDAPEST:
      return <HungaryFlag className="country-flag" />;
    default:
      return null;
  }
}

export default React.memo(CountryFlag);
