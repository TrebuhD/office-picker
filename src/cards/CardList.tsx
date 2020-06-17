import React, { useState } from "react";
import ScrollLock from "react-scrolllock";
import Modal from "rodal";
import "rodal/lib/rodal.css";

import { locationData } from "./constants";
import CardContent from "./Card";
import LocationDetailView from "../details/LocationDetailView";
import { Location } from "../types/common";
import "./CardList.scss";

function CardList() {
  // todo: reset state
  const [modalOpen, setModalOpen] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locationData[0]
  );

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

      <Modal visible={modalOpen} onClose={() => toggleModalOpen()}>
        <LocationDetailView
          location={selectedLocation}
          closeModal={() => toggleModalOpen()}
        />
      </Modal>

      {/* prevent page scrolling when modal is open */}
      <ScrollLock isActive={modalOpen} />
    </>
  );
}

export default React.memo(CardList);
