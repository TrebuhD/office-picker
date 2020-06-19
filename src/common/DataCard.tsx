import React from "react";

import "./DataCard.scss";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  label: string;
  icon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  value?: string;
  loading?: boolean;
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
            {link ? (
              <a
                href={link}
                className="data-card__value"
                target="_blank"
                rel="noopener noreferrer"
              >
                {value}
              </a>
            ) : (
              <span className="data-card__value">{value}</span>
            )}
            {secondaryIcon && (
              <i className="data-card__icon-wrapper data-card__icon-wrapper--secondary">
                {secondaryIcon}
              </i>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(DataCard);
