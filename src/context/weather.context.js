import { useState } from "react";
import { createContext } from "react";
import {DEFUALT_PLACE} from "../utils"

const WeatherContext = createContext();

function WeatherProvider({ Children }) {
    const [place, setPlace] = useState(DEFUALT_PLACE)
  return (
    <WeatherContext.Provider 
    value={{place}}>
        {Children}
    </WeatherContext.Provider>
  );
}

export {WeatherProvider}
export default WeatherContext

