import React from "react";
import Playground from "./components/Playground";
import Scores from "./components/Scores";
import { AppProvider } from "./contexts/appContext";

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <Playground />
        <Scores />
      </div>
    </AppProvider>
  );
}
