import "../styles/components/Forecast.scss";

function Forcast({ title, type, data }) {
  return (
    <div className="Forecast">
      <div className="forcast-container">
        <h3>{title}</h3>
        <div className="widget-container"></div>
      </div>
    </div>
  );
}

export default Forcast;
