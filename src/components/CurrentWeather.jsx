import { getCurrentWeather } from "../api/index";

function CurrentWeader() {
  const data = getCurrentWeather();
  console.log(data);
  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;
  return (
    <div className="CurrentWeather">
      <div className="temperature">
        <div className="weather-icon">
          <img />
        </div>
      </div>
      <div className="other-infos"></div>
    </div>
  );
}

export default CurrentWeader;
