import json
file_path = "temperature_predictions.json"

with open(file_path, 'r') as f:
    data = json.load(f)