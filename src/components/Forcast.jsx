import "../styles/components/Forecast.scss";
import HourlyForcastWidget from "./HourlyForcastWidget.tsx";
import DailyForcastWidget from "./DailyForcastWidget.tsx";

function Forcast({ title, type, data }) {
  return (
    <div className="Forecast">
      <div className="forcast-container">
        <h3>{title}</h3>
        <div className="widget-container">
          {data.map((singleData) => (
            <div>
              {type === "hourly" ? (
                <HourlyForcastWidget data={singleData} />
              ) : (
                <DailyForcastWidget data={singleData}/>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forcast;
