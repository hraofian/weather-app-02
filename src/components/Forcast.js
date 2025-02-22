import "../styles/components/Forecast.scss";
import HourlyForcastWidget from "./HourlyForcastWidget";
import DailyForcastWidget from "./DailyForcastWidget";
import HorizontallyScrollable from "./HorizontallyScrollable";

function Forcast({ title, type, data }) {
  return (
    <div className="Forecast">
      <div className="forcast-container">
        <h3>{title}</h3>
        <HorizontallyScrollable>
          <div className="widget-container">
            {data.map((singleData) => (
              <div key={singleData.date || singleData.day}>
                {type === "hourly" ? (
                  <HourlyForcastWidget data={singleData} />
                ) : (
                  <DailyForcastWidget data={singleData} />
                )}
              </div>
            ))}
          </div>
        </HorizontallyScrollable>
      </div>
    </div>
  );
}

export default Forcast;
