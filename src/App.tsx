import React from "react";

import AppHeader from "./AppHeader";
import CardList from "./cards/CardList";
import FooterCard from "./footer-card/FooterCard";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <div className="app__deco-rect">
        <div className="app__deco-rect-2" />
      </div>
      <section className="app__main-content">
        <AppHeader />
        <CardList />
        <FooterCard open={false} />
      </section>
    </main>
  );
}

export default App;
