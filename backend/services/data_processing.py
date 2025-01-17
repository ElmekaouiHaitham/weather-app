from utils import addLags, fourier_features_helper


def add_prcp_fourier(df):
    # yearly
    freq = 365 * 24
    order = 2
    df = fourier_features_helper(df,df.index[0], freq, order)
    return df


def prepare_prcp(data):
    """a function that prepare the data for the prediction it does the transformation for the linear model

    Args:
        data (list): a list containing the date data and last 80 temp records

    returns a series with data to be used in predictions
    """
    # add lag features
    df = addLags(data, 10, "prcp")
    # add fourier features
    df = add_prcp_fourier(df)
    # drop unnecessary columns
    df = df.drop(['time', 'prcp'], axis=1)
    return df


def add_temp_fourier(df):
    """add fourier features to the dataframe
    Keyword arguments:
    df -- a dataframe to which the fourier features are to be added
    Return: a dataframe with the fourier features added
    """
    # hourly
    freq = 24
    order = 2
    print(df)
    df = fourier_features_helper(df,df.index[0], freq, order)
    # yearly
    freq = 365 * 24
    order = 2
    df = fourier_features_helper(df,df.index[0], freq, order)
    return df


def addHour(df):
    """add the hour of the day to the dataframe
    Keyword arguments:
    df -- a dataframe to which the hour of the day is to be added
    Return: a dataframe with the hour of the day added
    """
    df['hour_of_day'] = df['time'].dt.hour
    return df


def prepare_temp(data):
    """a function that prepare the data for the prediction it does the transformation for the linear model

    Args:
        data (list): a list containing the date data and last 80 temp records

    returns a series with data to be used in predictions
    """
    # add lag features
    df = addLags(data, 80, "temp")
    # add the hour of the day
    df = addHour(df)
    # add fourier features
    df = add_temp_fourier(df)
    # drop unnecessary columns
    df = df.drop(['time', 'temp'], axis=1)
    return df
