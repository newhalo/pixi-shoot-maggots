import { createContext, useState } from "react";

export const AppContext = createContext({
  bullets: 0,
  kills: 0
});

export const AppProvider = ({ children }) => {
  const [scores, setScores] = useState({});
  return (
    <AppContext.Provider value={{ scores, setScores }}>
      {children}
    </AppContext.Provider>
  );
};
