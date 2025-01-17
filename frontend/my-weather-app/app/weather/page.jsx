
import { fetchWeatherCode, fetchWeatherData } from "@/utils/weatherApi";
import Sidebar from "@/components/SideBar";
import MainContent from "@/components/MainContent";
import ForecastCard from "@/components/ForecastCard";
// note: the last to work with java script pain in the ass

export default async function weather() {
  const weather = await fetchWeatherData();
  var { timestamp, data, temperatures, precipitations } = weather;
  const startHour = new Date(timestamp).getHours();
  const il = await fetchWeatherCode();
  const { current } = il;
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-800">
      <Sidebar />

      <MainContent data={data} current={current} startHour={startHour} />

      <ForecastCard
        temperatures={temperatures}
        precipitations={precipitations}
        startHour={startHour}
      />
    </div>
  );
}
