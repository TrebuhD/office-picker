import React, { useState } from "react";
import Modal from "rodal";
import "rodal/lib/rodal.css";

import { locationData } from "../constants";
import CardContent from "./Card";
import LocationDetailView from "../details/LocationDetailView";
import { Location } from "../types/common";
import "./CardList.scss";

function CardList() {
  // todo: reset state
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
        <div className="card-list__wrapper">
          {locationData.map((locationData, i) => (
            <CardContent
              key={i}
              location={locationData}
              toggleModalOpen={toggleModalOpen}
            />
          ))}
        </div>
      </div>

      <Modal visible={modalOpen} onClose={() => toggleModalOpen()} width={320}>
        {selectedLocation && (
          <LocationDetailView
            location={selectedLocation}
            closeModal={() => toggleModalOpen()}
          />
        )}
      </Modal>
    </>
  );
}

export default React.memo(CardList);
