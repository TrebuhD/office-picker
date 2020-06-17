import React, { Suspense } from "react";
import { useImage } from "react-image";

import LoadingSpinner from "../common/LoadingSpinner";
import { Location } from "../types/common";

interface Props {
  location: Location;
}

function HeaderImage({ srcList }: { srcList: string }) {
  const { src } = useImage({ srcList });
  return (
    <img className="location-detail-view__image" src={src} alt="city view" />
  );
}

function DetailViewHeader({ location }: Props) {
  if (!location) {
    return null;
  }

  return (
    <header className="location-detail-view__image-header">
      <Suspense fallback={<LoadingSpinner />}>
        <HeaderImage srcList={location.altImageUrl} />
      </Suspense>
      <div className="location-detail-view__image-overlay" />
      <h1 className="location-detail-view__location-name">{location.name}</h1>
    </header>
  );
}

export default React.memo(DetailViewHeader);
