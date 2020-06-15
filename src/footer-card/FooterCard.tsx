import React from "react";

import "./FooterCard.scss";

interface Props {
  open: boolean;
}

function FooterCard({ open }: Props) {
  return (
    <div className={`footer-card ${open ? "footer-card__open" : ""}`}>
      <div>asdp</div>
    </div>
  );
}

export default FooterCard;
