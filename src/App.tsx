import React from "react";

import AppHeader from "./AppHeader";
import CardList from "./cards/CardList";
import FooterCard from "./footer-card/FooterCard";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <section className="app__main-content">
        <AppHeader />
        <CardList />
        <FooterCard />
      </section>
    </main>
  );
}

export default App;
