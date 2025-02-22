import React from "react";
import WeatherIcon from "./WeatherIcon";

function DailyForcastWidget({ data }) {
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  //date format
  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  weather_date.day  = now_date.day === weather_date.day ? "Today" : weather_date.day

  console.log(data);
  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="max">Max {Math.round(temperature_max)} ℃</div>
        <div className="min">Min {Math.round(temperature_min)} ℃</div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} mm/h
      </div>
    </div>
  );
}

export default DailyForcastWidget;
