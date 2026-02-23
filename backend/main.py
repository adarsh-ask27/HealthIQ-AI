from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile
import joblib
import numpy as np
from utils.ocr import extract_text
from utils.parser import parse_medical_values
from utils.simulation import simulate_risk

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("ml_models/heart_model.pkl")

@app.post("/upload-report")
async def upload_report(file: UploadFile = File(...)):
    text = extract_text(file)
    values = parse_medical_values(text)
    return values

@app.post("/predict-risk")
async def predict_risk(data: dict):
    features = np.array([[
        data["age"],
        data["cholesterol"],
        data["bp"],
        data["bmi"],
        data["smoking"]
    ]])
    
    risk = model.predict_proba(features)[0][1]
    
    return {"heart_risk": float(risk)}

@app.post("/simulate-risk")
async def simulate(data: dict):
    result = simulate_risk(model, data)
    return result