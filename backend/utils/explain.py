def explain_prediction(model, input_df):
    coefficients = model.coef_[0]
    features = input_df.columns.tolist()

    importance = {}

    for i in range(len(features)):
        feature_name = features[i]
        feature_value = input_df.iloc[0][feature_name]
        contribution = abs(coefficients[i] * feature_value)
        importance[feature_name] = round(float(contribution), 4)

    return importance