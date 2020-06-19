import React from "react";
import Footer from "./footer/Footer";

import AppHeader from "./AppHeader";
import CardList from "./cards/CardList";
import { ReactComponent as PersonIcon } from "./assets/people.svg";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <div className="app__deco-rect">
        <div className="app__deco-rect-2" />
      </div>
      <PersonIcon className="app__deco-person-icon" />
      <section className="app__main-content">
        <AppHeader />
        <CardList />
        <Footer />
      </section>
    </main>
  );
}

export default App;
