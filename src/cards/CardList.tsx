import React, { useState } from "react";
import ScrollLock from "react-scrolllock";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

import { locationData } from "./constants";
import CardContent from "./Card";
import LocationDetailView from "../details/LocationDetailView";
import { Location } from "../types/common";
import "./CardList.scss";

function CardList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location>();

  function toggleModalOpen(location?: Location) {
    setModalOpen((state) => !state);
    if (location) {
      setSelectedLocation(location);
    }
  }

  return (
    <>
      <div className="card-list">
        {locationData.map((locationData, i) => (
          <CardContent
            key={i}
            location={locationData}
            toggleModalOpen={toggleModalOpen}
          />
        ))}
      </div>

      <Rodal visible={modalOpen} onClose={toggleModalOpen}>
        <LocationDetailView
          location={selectedLocation}
          closeModal={toggleModalOpen}
        />
      </Rodal>

      {/* prevent page scrolling when modal is open */}
      <ScrollLock isActive={modalOpen} />
    </>
  );
}

export default React.memo(CardList);
