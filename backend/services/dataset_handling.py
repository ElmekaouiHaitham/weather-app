import pandas as pd

DATASET_PATH = 'dataset.xlsx'

def update_dataset(data):
    # Explicitly parse the 'time' column as datetime when reading the Excel file
    df = pd.read_excel(DATASET_PATH, parse_dates=['time'])

    # Ensure the 'time' column is in the correct format
    df['time'] = pd.to_datetime(df['time'])

    # Append the new row to the existing DataFrame
    df_updated = df.append(data, ignore_index=True)

    # Print the last few rows to check the result
    print(df_updated.tail())

    # Write the updated DataFrame back to Excel, ensuring the format stays correct
    df_updated.to_excel(DATASET_PATH, index=False)


def get_current_data(df, current_date):
    return  df[df['time'] == current_date]

def get_last_n_records(df, current_time, n, column):
    filtered_df = df[df['time'] <= current_time].sort_values('time', ascending=False).head(n)
    return filtered_df[column]


def fetch_dataset():
    file_path = 'dataset.xlsx'
    df = pd.read_excel(file_path)
    df['time'] = pd.to_datetime(df['time'])
    return df
