import { ParticleContainer } from "@inlet/react-pixi/animated";
import { Rectangle, Ticker } from "pixi.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { initDudes, updateDude } from "../utils/animation";
import Dude from "./Dude";

const dudeBoundsPadding = 100;
const dudeBounds = new Rectangle(
  -dudeBoundsPadding,
  -dudeBoundsPadding,
  window.innerWidth + dudeBoundsPadding * 2,
  window.innerHeight + dudeBoundsPadding * 2
);

const Dudes = ({ total = 100 }) => {
  const tickRef = useRef(0);
  const [dudes, setDudes] = useState(initDudes(total));

  const animate = useCallback(
    (deltaTime) => {
      const tick = tickRef.current;
      setDudes((values) =>
        values.map((item) => updateDude(item, dudeBounds, tick))
      );
      tickRef.current += 0.1;
    },
    [tickRef]
  );

  useEffect(() => {
    Ticker.shared.add(animate);
    return () => Ticker.shared.remove(animate);
  }, [animate]);

  return (
    <ParticleContainer>
      {dudes.map(
        (
          {
            scale,
            x,
            y,
            tint,
            rotation,
            direction,
            turningSpeed,
            speed,
            offset
          },
          index
        ) => (
          <Dude
            scale={scale}
            x={x}
            y={y}
            tint={tint}
            direction={direction}
            turningSpeed={turningSpeed}
            speed={speed}
            offset={offset}
            key={index}
            rotation={rotation}
          />
        )
      )}
    </ParticleContainer>
  );
};

export default Dudes;
