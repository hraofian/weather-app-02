import { useContext } from "react";
import WeatherContext from "../context/theme.context"
import "../styles/components/Settings.scss"


function Settings() {
  const {dark} = useContext(WeatherContext)
  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons">
          <div className="light-theme-btn active">
            <i className="bi bi-sun"></i>
          </div>
          <div className="dark-theme-btn">
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div className="settings-btn">
        <i className="bi bi-gear"></i>
      </div>
    </div>
  );
}

export default Settings;
