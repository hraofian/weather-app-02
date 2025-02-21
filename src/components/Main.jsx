import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forcast from "./Forcast";
import "../styles/components/CurrentWeather.scss";

function Main() {
  return (
    <div className="Main">
      <CurrentWeather />
      <Forcast type="hourly" title="HOURLY FORCAST" data={} />
      <Forcast type="daily" title="21 DAYS FORCAST" data={} />
    </div>
  );
}

export default Main;
