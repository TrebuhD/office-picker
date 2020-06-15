import React from "react";
import { animated, useSpring } from "react-spring";
import UseAnimations from "react-useanimations";

import { Location } from "../types/common";
import "./Card.scss";

interface Props {
  location: Location;
  toggleModalOpen: (location: Location) => void;
}

const normalSpringProps = { xys: [0, 0, 1] };

const getHoverSpringProps = (x: number, y: number) => ({
  xys: [
    -(y - window.innerHeight / 2) / 200,
    (x - window.innerWidth / 2) / 200,
    1.02,
  ],
});

const getCardTransform = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card({ location, toggleModalOpen }: Props) {
  const [springProps, setSpring] = useSpring(() => normalSpringProps);

  return (
    <animated.div
      className={`card`}
      onMouseMove={({ clientX: x, clientY: y }) =>
        setSpring(getHoverSpringProps(x, y))
      }
      onMouseLeave={() => setSpring(normalSpringProps)}
      onMouseDown={() => toggleModalOpen(location)}
      style={{ transform: springProps.xys.to(getCardTransform) }}
    >
      <div
        className="card__image-wrapper"
        style={{
          background: `center / cover no-repeat url(${location.imageUrl})`,
        }}
      />
      <header className="card__header">
        <span className="card__header-title">{location.name}</span>
        <div className="card-content__expand-button">
          <UseAnimations animationKey="maximizeMinimize2s" size={24} />
        </div>
      </header>
      <span className="card__description">{location.description}</span>
      {/* rate */}
      <br />
      <span>not yet rated</span>
    </animated.div>
  );
}

export default React.memo(Card);
