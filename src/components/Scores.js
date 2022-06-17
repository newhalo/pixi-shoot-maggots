import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const Scores = ({ viewportWidth = 300 }) => {
  const { scores } = useContext(AppContext);
  return (
    <div
      style={{
        color: "white",
        position: "fixed",
        top: 15,
        left: viewportWidth / 2 - 10,
        fontWeight: 700
      }}
    >
      <span>Used Bullets: {scores.bullets ?? 0}</span>
      <br />
      <span>Kills: {scores.kills ?? 0}</span>
    </div>
  );
};

export default Scores;
