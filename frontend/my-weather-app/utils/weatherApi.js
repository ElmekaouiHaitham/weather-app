export const fetchWeatherData = async () => {
  const response = await fetch('https://haithamelm.pythonanywhere.com/weather', {
    method: 'GET',
    cache: 'no-store',
  });
  return response.json();
};

export const fetchWeatherCode = async () => {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=34.0132&longitude=-6.8326&current=weather_code&hourly=temperature_2m&timezone=Europe%2FLondon',
    {
      method: 'GET',
      cache: 'no-store',
    }
  );
  return response.json();
};
