import React from "react";

import "./DataCard.scss";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  label: string;
  icon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  value?: string;
  loading: boolean;
  // link to flight
  link?: string;
}

function DataCard({ label, icon, value, secondaryIcon, loading, link }: Props) {
  return (
    <div className={`data-card ${loading ? "data-card--loading" : ""}`}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <i className="data-card__icon-wrapper">{icon}</i>
          <div className="data-card__main-data-container">
            <label className="data-card__label">{label}</label>
            <a
              href={link}
              rel="noopener"
              target="_blank"
              className="data-card__value"
            >
              {value}
            </a>
            <i className="data-card__icon-wrapper data-card__icon-wrapper--secondary">
              {secondaryIcon}
            </i>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(DataCard);
