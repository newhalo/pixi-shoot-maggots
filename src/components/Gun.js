import { Sprite } from "@inlet/react-pixi/animated";
import React from "react";
import gunImg from "../assets/gun.png";

const Gun = React.forwardRef(({ image = gunImg, rotation = 0 }, ref) => {
  return (
    <Sprite
      ref={ref}
      image={image}
      anchor={0.5}
      scale={0.5}
      x={250}
      y={780}
      rotation={rotation}
    />
  );
});

export default Gun;
