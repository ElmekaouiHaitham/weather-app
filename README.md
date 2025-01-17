# Rabat Weather

Rabat Weather is a web application designed to provide current weather data and a 24-hour forecast for temperature and rain probability. This project was created to practice machine learning algorithms and web development.

you can visit the website at: [https://rabat-weather.vercel.app/](https://rabat-weather.vercel.app/)

---

## Project Purpose

The main purpose of Rabat Weather is to:

- Experiment with machine learning algorithms (Linear Regression and Logistic Regression).
- Practice full-stack web development by building a functional website hosted online.

---

## Features

- **Current Weather Data**: Displays real-time weather information for Rabat, Morocco.
- **24-Hour Forecast**:
  - **Temperature Forecast**: Uses a Linear Regression model to predict hourly temperatures for the next 24 hours.
  - **Rain Probability Forecast**: Uses a Logistic Regression model to predict the likelihood of precipitation for the next 24 hours.

---

## Machine Learning Models

### Data Source

The dataset was collected from [Meteostat.net](https://meteostat.net). It includes the following features:

- `time`: Timestamp (hourly data).
- `temp`: Temperature.
- `dwpt`: Dew point.
- `rhum`: Relative humidity.
- `wdir`: Wind direction.
- `wspd`: Wind speed.
- `press`: Atmospheric pressure.

### Models

- **Temperature Forecast Model**: Simple Linear Regression.
- **Rain Probability Forecast Model**: Logistic Regression.

For more details about model training, refer to the `model_training` folder.

---

## Backend using Flask python

- **Overview**:

  - The backend is built using Flask Python and hosted on [PythonAnywhere](https://www.pythonanywhere.com/).
  - It fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/) service.
  - The backend processes the data and provides predictions via a single endpoint.

- **API Endpoint**:

  - **Endpoint**: `/weather`
  - **Response Format**:
    ```json
    {
      "data": { <Real-time weather data> },
      "temperatures": [<24-hour temperature predictions>],
      "precipitations": [<24-hour rain probability predictions>],
      "timestamp": "<Timestamp>"
    }
    ```

For more information, refer to the `backend` folder.

---

## Frontend using Next js

- The frontend is a simple single-page application (SPA) built using next js and Tailwind CSS.
- It fetches data and predictions from the backend and displays them in a clean and user-friendly interface.
- Hosted on [Vercel](https://vercel.com/).

---

## Challenges

- Achieving accurate predictions for temperature and rain probability remains an ongoing challenge.

---

## Future Plans

- Support weather data and predictions for cities worldwide.
- Integrate more sophisticated and precise machine learning models for improved forecasts.
- Enhance the frontend for a better user experience.

---

## Project Structure

```
weather-app
├── backend (flask app)
├── frontend (Next js)
├── models training (IPYNB Files: Interactive Python Notebooks)
└── README.md
```

---

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/username/rabat-weather.git
   cd rabat-weather
   ```

2. Navigate to the `backend` folder and set up the Python environment:

   ```bash
   pip install -r requirements.txt
   python app.py
   ```

3. Navigate to the `frontend` folder for instructions

---

## Contributing

Feel free to fork this repository and submit pull requests with new features or improvements.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- **Meteostat**: For providing historical weather data.
- **WeatherAPI**: For real-time weather data.
- **PythonAnywhere**: For hosting the backend.
- **Vercel**: For hosting the frontend.

