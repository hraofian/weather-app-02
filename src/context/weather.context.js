import { useState } from "react";
import { createContext } from "react";
import { DEFUALT_PLACE } from "../utils";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFUALT_PLACE);
  return (
    <WeatherContext.Provider value={{ place }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
