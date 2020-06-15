import React from "react";

import AppHeader from "./AppHeader";
import CardList from "./cards/CardList";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <AppHeader />
      <CardList />
    </main>
  );
}

export default App;
