import React, { useState } from "react";
import { useSprings, animated, to } from "react-spring";
import { useGesture } from "react-use-gesture";
import { cardBackgrounds } from "./constants";

import "./Deck.scss";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const springTo = (i: number) => ({
  x: 0,
  y: i * -4,
  delay: i * 100,
});
const springFrom = (i: number) => ({
  x: 0,
  y: -1000,
});

const flipStringTransform = (r: number) => `rotateX(${r}deg)`;

/**
 * The card deck animation is based on one of the examples in react-spring (https://www.react-spring.io/)
 */
function Deck() {
  const [flickedOutCards] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [flipped, setFlipped] = useState(false);
  const [springProps, setSpring] = useSprings(cardBackgrounds.length, (i) => ({
    ...springTo(i),
    from: springFrom(i),
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) flickedOutCards.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

      // @ts-ignore
      setSpring((i: number) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = flickedOutCards.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        return {
          x,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && flickedOutCards.size === cardBackgrounds.length) {
        setTimeout(
          // @ts-ignore
          () => flickedOutCards.clear() || setSpring((i) => springTo(i)),
          600
        );
      }
    }
  );

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className="deck">
      {springProps.map(({ x, y }, i) => (
        <animated.div
          className="deck-card__wrapper"
          key={i}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
        >
          <animated.div
            {...bind(i)}
            className="deck-card__card deck-card__card--front"
            style={{
              backgroundImage: `url(${cardBackgrounds[i]})`,
            }}
          />
          <animated.div
            {...bind(i)}
            className="deck-card__card deck-card__card--back"
            style={{}}
          />
        </animated.div>
      ))}

      <button
        className="button"
        onClick={() =>
          setSpring(() => ({
            // flipRotation: 180,
          }))
        }
      >
        FLIP
      </button>
    </div>
  );
}

export default Deck;
