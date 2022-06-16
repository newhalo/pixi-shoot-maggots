import { Sprite } from "@inlet/react-pixi/animated";
import React from "react";
import dudeImg from "../assets/dude.png";

const Dude = React.forwardRef(
  (
    {
      image = dudeImg,
      anchor = 0.5,
      scale = 1,
      x = 0,
      y = 0,
      tint,
      direction,
      turningSpeed,
      speed,
      offset,
      rotation
    },
    ref
  ) => {
    return (
      <Sprite
        ref={ref}
        image={image}
        anchor={anchor}
        scale={scale}
        x={x}
        y={y}
        tint={tint}
        direction={direction}
        turningSpeed={turningSpeed}
        speed={speed}
        offset={offset}
        rotation={rotation}
      />
    );
  }
);

export default Dude;
