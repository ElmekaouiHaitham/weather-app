import { getWeatherIcon } from "../utils/weatherIcons";
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
const MainContent = ({ data, current, startHour }) => (
  <main className="flex-1 p-6 lg:p-8">
    <div className="flex justify-between items-center rounded-xl mb-8">
      <input
        type="text"
        placeholder="Search for cities"
        className="bg-gray-700 text-gray-300 px-4 py-2 rounded-xl focus:outline-none w-full lg:w-2/3"
      />
    </div>

    <div className="flex flex-col lg:flex-row mb-8 justify-between items-center lg:mr-11 lg:ml-5">
      <div className="items-center mt-4 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-white mb-6">Rabat</h2>
        <span className="text-6xl font-bold text-white">{data.temp}°C</span>
      </div>
      <div className="mt-4 lg:mt-0 lg:ml-4 text-9xl">
        {getWeatherIcon(
          current.weather_code,
          startHour < 18 ? "morning" : "night"
        )}
      </div>
    </div>

    <div className="bg-gray-700 rounded-2xl p-6 mt-20 text-gray-400">
      <h3 className="text-xl font-bold mb-4">Air Conditions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <FaTint className="text-xl" />
            <span className="font-bold text-xl">Humidity</span>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-white text-3xl">{data.rhum}%</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <FaCloudRain className="text-xl" />
            <span className="font-bold text-xl">Dew Point</span>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-white text-3xl">{data.dwpt} °C</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <FaCloudShowersHeavy className="text-xl" />
            <span className="font-bold text-xl">Precipitation</span>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-white text-3xl">{data.prcp} ml</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <FaTachometerAlt className="text-xl" />
            <span className="font-bold text-xl">Pressure</span>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-white text-3xl">{data.pres} hPa</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <FaWind className="text-xl" />
            <span className="font-bold text-xl">Wind Speed</span>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-white text-3xl">{data.wspd} km/h</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <FaCompass className="text-xl" />
            <span className="font-bold text-xl">Wind Direction</span>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-bold text-white text-3xl">{data.wdir}°</p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default MainContent;
