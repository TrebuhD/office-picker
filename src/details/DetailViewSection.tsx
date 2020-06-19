import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";

interface Props {
  name: string;
  children: React.ReactNode;
  description: string;
  loading?: boolean;
}

function DetailViewSection({ name, children, description, loading }: Props) {
  return (
    <section className="location-detail-view__section">
      <h3 className="location-detail-view__section-header">{name}</h3>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="location-detail-view__section-description">
            {description}
          </div>
          {children}
        </>
      )}
    </section>
  );
}

export default React.memo(DetailViewSection);
