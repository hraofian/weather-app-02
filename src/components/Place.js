// import { useContext } from "react";
// import WeatherContext from "../context/weather.context";

function Place() {
  // const {place} = useContext(WeatherContext);
  return (
    <div className="Place">
      <i className="bi bi-geo-alt"></i>
      {/* <b> london {place.name}</b>, {place.country} */}
      <b> london </b>, united kingdom
    </div>
  );
}

export default Place;
