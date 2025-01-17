import {
  TiWeatherCloudy,
  TiWeatherShower,
} from "react-icons/ti";
import {
  WiFog,
  WiSnow,
  WiRainMix,
  WiThunderstorm,
  WiRaindrop
} from "react-icons/wi";
import { FaSun, FaMoon } from "react-icons/fa6";
import {
  FaTint,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaTachometerAlt,
  FaWind,
  FaCompass,
  FaMap,
  FaCloud,
} from "react-icons/fa";
export const getWeatherIcon = (code, timeOfDay) => {
  const isNight = timeOfDay === "night";

  if (code === 0) {
    return isNight ? (
      <FaMoon className="text-9xl mx-auto text-blue-500" /> // Clear sky at night
    ) : (
      <FaSun className="text-9xl mx-auto text-yellow-300" /> // Clear sky during the day
    );
  }

  if ([1, 2, 3].includes(code)) {
    return isNight ? (
      <FaMoon className="text-9xl mx-auto text-gray-400" /> // Cloudy at night
    ) : (
      <TiWeatherCloudy className="text-9xl mx-auto text-gray-600" /> // Cloudy during the day
    );
  }

  if ([45, 48].includes(code)) {
    return (
      <WiFog
        className={`text-9xl mx-auto ${isNight ? "text-gray-500" : "text-gray-300"}`}
      />
    ); // Fog
  }

  if ([51, 53, 55].includes(code)) {
    return (
      <WiRainMix
        className={`text-9xl mx-auto ${isNight ? "text-blue-600" : "text-blue-400"}`}
      />
    ); // Drizzle
  }

  if ([56, 57].includes(code)) {
    return (
      <WiRaindrop
        className={`text-9xl mx-auto ${isNight ? "text-blue-700" : "text-blue-500"}`}
      />
    ); // Freezing drizzle
  }

  if ([61, 63, 65].includes(code)) {
    return (
      <TiWeatherShower
        className={`text-9xl mx-auto ${isNight ? "text-blue-800" : "text-blue-600"}`}
      />
    ); // Rain
  }

  if ([66, 67].includes(code)) {
    return (
      <WiRaindrop
        className={`text-9xl mx-auto ${isNight ? "text-indigo-700" : "text-indigo-500"}`}
      />
    ); // Freezing rain
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return (
      <WiSnow
        className={`text-9xl mx-auto ${isNight ? "text-white" : "text-blue-200"}`}
      />
    ); // Snowfall
  }

  if ([80, 81, 82].includes(code)) {
    return (
      <TiWeatherShower
        className={`text-9xl mx-auto ${isNight ? "text-blue-900" : "text-blue-500"}`}
      />
    ); // Rain showers
  }

  if ([95, 96, 99].includes(code)) {
    return (
      <WiThunderstorm
        className={`text-9xl mx-auto ${isNight ? "text-purple-700" : "text-purple-500"}`}
      />
    ); // Thunderstorm
  }

  return <span>❓</span>; // Fallback for unknown codes
};

