import json
from services.apidata import get_api_data
from services.data_processing import prepare_prcp, prepare_temp
from services.dataset_handling import fetch_dataset, get_current_data, update_dataset
from services.forecasting import predict_prcp, predict_temp
from utils import get_prcp_data, get_temp_data

file_path = 'temperature_predictions.json'

def store_new_predictions(current_hour, data):
    data[0]['time'] = data[0]['time'].strftime('%Y-%m-%dT%H:%M:%S')

    # Store the prediction data in a text file (JSON format)
    data = {
        'timestamp': current_hour.isoformat(),
        'data': data[0].to_dict(),
        'temperatures': data[1].tolist(),
        'precipitations': [step_proba[:, 1].tolist()[0] for step_proba in data[2]]
    }

    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)


def get_new_predictions(current_hour):

    df = fetch_dataset()

    current_data = get_current_data(df, current_hour)
    # to avoid aliasing , we create a copy of the data
    current_data_copy = current_data.copy()

    temp_data = get_temp_data(current_hour, current_data, df)
    prcp_data = get_prcp_data(current_hour, current_data_copy, df)

    temp_processed_data = prepare_temp(temp_data)
    predictions = predict_temp(temp_processed_data)

    prcp_processed_data = prepare_prcp(prcp_data)
    prcp_predictions = predict_prcp(prcp_processed_data)


    print(current_data)

    return [current_data.iloc[0], predictions, prcp_predictions]


def update_predictions(current_hour):

    # get new data from the api
    data = get_api_data()

    # update the dataset by adding this hour recoreds (fetched from the api)
    update_dataset(data)

    data = get_new_predictions(current_hour)

    store_new_predictions(current_hour, data)
