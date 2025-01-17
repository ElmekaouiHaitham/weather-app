const ForecastCard = ({ temperatures, precipitations, startHour }) => (
    <aside className="md:w-full mx-12 md:ml-0 md:mr-7 lg:w-1/4 bg-gray-700 rounded-2xl mt-5 p-6 text-gray-400 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-6">24 Hours Forecast</h3>
      <div className="flex justify-between mb-2 ml-4">
        <span className="text-sm text-gray-300">Hour</span>
        <span className="text-sm text-gray-300">Temp (°C)</span>
        <span className="text-sm text-gray-300">Chance of Rain (%)</span>
      </div>
      <ul className="space-y-4">
        {temperatures[0].map((temp, index) => {
          const hour = (startHour + index) % 24;
          let probability = Math.round(precipitations[index]);

          return (
            <li key={index} className="flex justify-between items-center px-3.5">
              <span className="text-white">{hour}:00</span>
              <span className="flex items-center text-white font-semibold">
                {Math.round(temp)}°C
              </span>
              <span>{probability > 0 ? `${probability}%` : '0%'}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );

  export default ForecastCard;
