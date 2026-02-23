import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import joblib

# Example dummy dataset
data = pd.DataFrame({
    "age": [45,50,60,30,40,55,65],
    "cholesterol": [200,240,260,180,190,250,270],
    "bp": [130,150,160,120,125,155,170],
    "bmi": [25,30,28,22,24,29,31],
    "smoking": [1,1,0,0,0,1,1],
    "target": [0,1,1,0,0,1,1]
})

X = data.drop("target", axis=1)
y = data["target"]

model = LogisticRegression()
model.fit(X, y)

joblib.dump(model, "heart_model.pkl")
print("Model saved!")