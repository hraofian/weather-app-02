import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forcast from "./Forcast";
import "../styles/components/CurrentWeather.scss";
import { getDailyForcast, getHourlyForcast } from "../api";

function Main() {
  return (
    <div className="Main">
      <CurrentWeather />
      <Forcast type="hourly" title="HOURLY FORCAST" data={getHourlyForcast()} />
      <Forcast type="daily" title="21 DAYS FORCAST" data={getDailyForcast()} />
    </div>
  );
}

export default Main;
