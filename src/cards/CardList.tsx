import React, { useMemo, useState } from "react";
import ScrollLock from "react-scrolllock";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

import { cards } from "./constants";
import CardContent from "./Card";
import LocationDetailView from "../LocationDetailView";
import "./CardList.scss";

function CardList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  function toggleModalOpen(locationName: string) {
    setModalOpen((state) => !state);
    setSelectedLocation(locationName);
  }

  return (
    <>
      <div className="card-list">
        {cards.map((cardData, i) => {
          return (
            <CardContent
              key={i}
              locationName={cardData.name}
              imageUrl={cardData.imageUrl}
              description={cardData.description}
              toggleModalOpen={toggleModalOpen}
            />
          );
        })}
      </div>
      <Rodal visible={modalOpen} onClose={() => toggleModalOpen("")}>
        <LocationDetailView />
      </Rodal>
      {/* prevent page scrolling when modal is open */}
      <ScrollLock isActive={modalOpen} />
    </>
  );
}

export default React.memo(CardList);
