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

  const otherInfoWidgets = [
    {
      id: 0,
      icon: "droplet",
      name: "Precipation",
      value: Math.round(precipitation.total),
      unit: "in/h",
    },
    {
      id: 1,
      icon: "wind",
      name: "wind",
      value: Math.round(wind.speed),
      unit: "mph",
    },
    {
      id: 2,
      icon: "misture",
      name: "Humidity",
      value: Math.round(humidity),
      unit: "%",
    },
    {
      id: 3,
      icon: "sundlasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: "",
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: "%",
    },
    {
      id: 5,
      icon: "eye",
      name: "Visibility",
      value: Math.round(visibility),
      unit: "mi",
    },
  ];

  return (
    <div className="CurrentWeather">
      <div className="temperature">
        <div className="weather-icon">
          <img
            src={`${process.env.PUBLIC_URL}/dist/weather_icons/set04/big/${icon_num}.png`}
            alt={summary}
          />
        </div>
        <div className="value">
          <div className="real">{temperature} ℃</div>
          <div className="feels_like">feels like : {feels_like} ℃</div>
        </div>
        <div className="summary">{summary}</div>
      </div>
      <div className="other-infos"></div>
    </div>
  );
}

export default CurrentWeader;
