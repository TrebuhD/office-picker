import React from "react";

import "./AppHeader.scss";

function AppHeader() {
  return (
    <header className="app-header">
      <h1 className="app-header__title">Office location finder.</h1>
      <div className="app-header__paragraph-container">
        <p className="app-header__paragraph">
          Help Jamie pick his next office location!
        </p>
        <p className="app-header__paragraph">
          Click on a location to learn more about it.
        </p>
      </div>
    </header>
  );
}

export default React.memo(AppHeader);
