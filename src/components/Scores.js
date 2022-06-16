import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const Scores = () => {
  const { scores } = useContext(AppContext);
  return (
    <div
      style={{
        color: "white",
        position: "fixed",
        top: 15,
        left: 15,
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
