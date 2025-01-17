from datetime import datetime
import requests
import pandas as pd

API_KEY = "d81fb30da90d4794bdb151325240112"
station = "Rabat"

def get_api_data():
    data = fetch_weather_data()
    # now turning the data into new format
    data = {
        'time': datetime.strptime(data['current']['last_updated'], "%Y-%m-%d %H:%M").strftime("%Y-%m-%d %H:00"),
        'temp': data['current']['temp_c'],
        'dwpt': data['current']['dewpoint_c'],
        'rhum': data['current']['humidity'],
        'prcp': data['current']['precip_mm'],
        'wdir': wind_dir_to_degrees(data['current']['wind_dir']),
        'wspd': data['current']['wind_kph'],
        'pres': data['current']['pressure_mb'],

    }
    return data

def wind_dir_to_degrees(card):
    wind_dir_map = {
    'N': 0, 'NNE': 22.5, 'NE': 45, 'ENE': 67.5,
    'E': 90, 'ESE': 112.5, 'SE': 135, 'SSE': 157.5,
    'S': 180, 'SSW': 202.5, 'SW': 225, 'WSW': 247.5,
    'W': 270, 'WNW': 292.5, 'NW': 315, 'NNW': 337.5
    }
    return wind_dir_map[card]

def fetch_weather_data():
    # API endpoint and parameters
    api_url = 'https://api.weatherapi.com/v1/current.json'
    params = {
        'q': station,
        'key': API_KEY,
        'aqi': 'no'
    }

    # Make the API call
    response = requests.get(api_url, params=params)

    # Check if the API call was successful
    if response.status_code == 200:
        data = response.json()  # Parse the JSON response
        return data  # Return data as JSON
    else:
        return {'error': 'Failed to fetch weather data'}, response.status_code

