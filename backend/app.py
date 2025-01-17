import json
from flask import Flask, jsonify, redirect, url_for
import datetime
from logic.weather_logic import update_predictions

app = Flask(__name__)

file_path = "temperature_predictions.json"

@app.route('/')
def home():
    """Redirect users from the home page to the /weather endpoint."""
    return redirect(url_for('weather_data'))


@app.route('/weather')
def weather_data():
    """
    Fetch the weather data from the JSON file or update it if stale.
    Returns:
        JSON response containing weather data or an error message.
    """
    try:
        # Read the most recent temperature predictions from the JSON file
        with open(file_path, 'r') as f:
            data = json.load(f)

        # TODO: adjust it by adding one hour for the server
        # for the server
        # current_time = datetime.datetime.now()
        # for the local
        current_time = datetime.datetime.now() + datetime.timedelta(hours=1)
        # Calculate the time 6 minutes before the current hour to assure new data is recorded
        current_hour_before_6 = current_time - datetime.timedelta(minutes=6)
        saved_time = datetime.datetime.fromisoformat(data['timestamp'])

        if current_hour_before_6.hour == saved_time.hour:
            return jsonify(data)
        else:
            current_hour = current_time.replace(second=0, microsecond=0, minute=0)
            update_predictions(current_hour)
            with open(file_path, 'r') as f:
                data = json.load(f)
                return jsonify(data)
    except FileNotFoundError:
        print(file_path)
        return jsonify({"error": "Data file not found1"}), 404
    except json.JSONDecodeError:
        return jsonify({"error": "Data file is corrupted"}), 500

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
