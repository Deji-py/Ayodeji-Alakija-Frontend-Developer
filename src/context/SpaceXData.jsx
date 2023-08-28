import { createContext, useState } from "react";

export const SpaceXContext = createContext({
  spaceXData: [],
  setSpaceXData: () => {},
});

function SpaceXDataProvider({ children }) {
  const [spaceXData, setSpaceXData] = useState(null);

  const value = {
    setSpaceXData,
    spaceXData,
  };

  return (
    <SpaceXContext.Provider value={value}>{children}</SpaceXContext.Provider>
  );
}

export default SpaceXDataProvider;
