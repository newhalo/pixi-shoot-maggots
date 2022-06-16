import { Sprite } from "@inlet/react-pixi/animated";
import React, { Fragment } from "react";
import beemImg from "../assets/beem.png";

const Bullets = ({ bullets = [] }) => {
  return (
    <Fragment>
      {bullets.map((item, index) => (
        <Sprite
          key={index}
          image={beemImg}
          anchor={0.5}
          scale={1}
          x={item.x}
          y={item.y}
          rotation={item.rotation ?? 0}
        />
      ))}
    </Fragment>
  );
};

export default Bullets;
