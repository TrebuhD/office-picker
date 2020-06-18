import React from "react";

import "./DataCard.scss";

interface Props {
  label: string;
  icon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  value: string;
}

function DataCard({ label, icon, value, secondaryIcon }: Props) {
  return (
    <div className="data-card">
      <i className="data-card__icon-wrapper">{icon}</i>
      <div className="data-card__main-data-container">
        <label className="data-card__label">{label}</label>
        <div className="data-card__value">{value}</div>
      </div>
      <i className="data-card__icon-wrapper data-card__icon-wrapper--secondary">
        {secondaryIcon}
      </i>
    </div>
  );
}

export default React.memo(DataCard);
