import React from "react";

import AppHeader from "./AppHeader";
import Deck from "./cards/Deck";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <AppHeader />
      <Deck />
    </main>
  );
}

export default App;
