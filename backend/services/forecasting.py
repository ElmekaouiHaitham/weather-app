import pickle


def predict_prcp(df):
    # load the model
    model = pickle.load(open('trained_model_prcp.sav', 'rb'))
    df = df = df[sorted(df.columns)]
    predictions = model.predict_proba(df)
    return predictions


def predict_temp(df):
    """predict the target variable using trained linear regresion
    Keyword arguments:
    df -- a dataframe with the features to be used for prediction
    Return: a dataframe with the predicted target variable
    """
    # load the model
    model = pickle.load(open('trained_model.sav', 'rb'))
    df = df = df[sorted(df.columns)]
    predictions = model.predict(df)
    return predictions
