import currentWeather from "./current-weather.json";
import dailyForcast from "./daily-forcast.json";
import hourlyForcast from "./hourly-forcast.json";

function getCurrentWeather() {
  return currentWeather.current;
}

function getDailyForcast() {
  return dailyForcast.daily.data;
}

function getHourlyForcast() {
  return hourlyForcast.hourly.data;
}

export { getCurrentWeather, getDailyForcast, getHourlyForcast };
