import React from "react";

import "./AppHeader.scss";

function AppHeader() {
  return (
    <header className="app-header">
      <h1 className="app-header__title">Office location picker.</h1>
      <p className="app-header__subtitle">Help Jamie pick his next office location!</p>
      <p className="app-header__subtitle">Browse through the cards</p>
    </header>
  );
}

export default AppHeader;
