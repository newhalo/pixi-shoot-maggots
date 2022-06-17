import { Sprite } from "@inlet/react-pixi/animated";
import React from "react";
import gunImg from "../assets/gun.png";

const Gun = React.forwardRef(
  ({ x = 0, y = 0, image = gunImg, rotation = 0 }, ref) => {
    return (
      <Sprite
        ref={ref}
        image={image}
        anchor={0.5}
        scale={0.5}
        x={x}
        y={y}
        rotation={rotation}
      />
    );
  }
);

export default Gun;
