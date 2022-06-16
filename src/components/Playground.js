import { Stage } from "@inlet/react-pixi/animated";
import { Ticker } from "pixi.js";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../contexts/appContext";
import { rotateToPoint } from "../utils/animation";
import Bullets from "./Bullets";
import Dudes from "./Dudes";
import Gun from "./Gun";

const totalDudes = 100;
const bulletSpeed = 5;

const Playground = ({ width = 500, height = 800 }) => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const gunRef = useRef(null);
  const [bullets, setBullets] = useState([]);
  const { setScores } = useContext(AppContext);

  const onMouseDown = () => {
    gunShoot(gunRef.current?.rotation, {
      x: gunRef.current?.position.x + Math.cos(gunRef.current?.rotation) * 20,
      y: gunRef.current?.position.y + Math.sin(gunRef.current?.rotation) * 20
    });
  };

  const onMouseMove = (e) => {
    mousePosition.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  function gunShoot(rotation, startPosition) {
    const bullet = {};
    bullet.x = startPosition.x;
    bullet.y = startPosition.y;
    bullet.rotation = rotation;
    setBullets((bullets) => {
      bullets.push(bullet);
      return bullets;
    });
    setScores((scores) => ({ ...scores, bullets: (scores.bullets ?? 0) + 1 }));
  }

  const animateBullets = useCallback(
    (deltaTime) => {
      gunRef.current.rotation = rotateToPoint(
        mousePosition.current.x,
        mousePosition.current.y,
        gunRef.current.position.x,
        gunRef.current.position.y
      );

      setBullets((bullets) =>
        bullets.map((item) => ({
          ...item,
          x: item.x + Math.cos(item.rotation) * bulletSpeed,
          y: item.y + Math.sin(item.rotation) * bulletSpeed
        }))
      );
    },
    [mousePosition]
  );

  useEffect(() => {
    Ticker.shared.add(animateBullets);
    return () => Ticker.shared.remove(animateBullets);
  }, [animateBullets]);

  return (
    <Stage
      width={width}
      height={height}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
    >
      <Dudes total={totalDudes} />
      <Bullets bullets={bullets} speed={5} />
      <Gun ref={gunRef} />
    </Stage>
  );
};

export default Playground;
