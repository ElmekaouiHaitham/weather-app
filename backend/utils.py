import numpy as np
from services.dataset_handling import get_last_n_records


def get_temp_data(current_date, current_data, df):
    """
    This function return the data needed for the prediction

    Args:
        hour (datetime): The hour wich want data for.

    Returns:
        DataFrame: his hours records (temp, pres, prcp)
        and last 80 temp
    """

    last_80_temp = get_last_n_records(df, current_date, 80, 'temp')
    return [current_data, last_80_temp]


def get_prcp_data(current_date, current_data, df):
    """
    This function return the data needed for the prediction for prcp

    Args:
        hour (datetime): The hour wich want data for.

    Returns:
        DataFrame: his hours records (temp, pres, prcp)
        and last 80 temp
    """

    last_10_prcp = get_last_n_records(df, current_date, 10, 'prcp')
    return [current_data, last_10_prcp]


def addLags(data:list, n:int, column:str):
    """a function that add lag features to the data"""
    df = data[0]
    df[f'{column}_lag_0'] = df[column]
    last_n_prcp = data[1]
    for i in range(1, n):
        df[column + '_lag_' + str(i)] = last_n_prcp.iloc[i]
    return df


def fourier_features_helper(df, index, freq, order):
  k = 2 * np.pi * (1 / freq) * index.astype(np.float64)
  for i in range(1, order + 1):
    df[f"sin_{freq}_{i}"] = np.sin(i * k).astype(np.float64)
    df[f"cos_{freq}_{i}"] = np.cos(i * k).astype(np.float64)
  return df
