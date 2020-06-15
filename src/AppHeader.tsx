import React from "react";

import "./AppHeader.scss";

function AppHeader() {
  return (
    <header className="app-header">
      <h1 className="app-header__title">Office location finder.</h1>
      <p className="app-header__subtitle">
        Help Jamie pick his next office location!
      </p>
    </header>
  );
}

export default React.memo(AppHeader);
