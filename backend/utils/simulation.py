import numpy as np
import pandas as pd
from utils.explain import explain_prediction

def simulate_risk(model, data):

    # Safe extraction
    age = data.get("age", 0)
    cholesterol = data.get("cholesterol", 0)
    bp = data.get("bp", 0)
    bmi = data.get("bmi", 0)
    smoking = data.get("smoking", 0)

    new_cholesterol = data.get("new_cholesterol", cholesterol)
    new_bp = data.get("new_bp", bp)
    new_bmi = data.get("new_bmi", bmi)
    new_smoking = data.get("new_smoking", smoking)

    # Create DataFrames
    current = pd.DataFrame([{
        "age": age,
        "cholesterol": cholesterol,
        "bp": bp,
        "bmi": bmi,
        "smoking": smoking
    }])

    modified = pd.DataFrame([{
        "age": age,
        "cholesterol": new_cholesterol,
        "bp": new_bp,
        "bmi": new_bmi,
        "smoking": new_smoking
    }])

    # Predict risk
    current_risk = model.predict_proba(current)[0][1]
    new_risk = model.predict_proba(modified)[0][1]

    # Convert to percentages
    current_percent = round(float(current_risk * 100), 2)
    new_percent = round(float(new_risk * 100), 2)
    improvement_percent = round(current_percent - new_percent, 2)

    # Risk Level Classification
    if current_percent > 30:
        risk_level = "High"
    elif current_percent > 15:
        risk_level = "Moderate"
    else:
        risk_level = "Low"

    # Clinical Message
    clinical_message = f"Your estimated 5-year cardiovascular risk is {risk_level}. Preventive lifestyle modifications can significantly reduce complications."

    # Lifestyle Recommendations
    recommendations = []

    if cholesterol > 200:
        recommendations.append("Reduce saturated fat intake and monitor cholesterol levels.")

    if bp > 140:
        recommendations.append("Regular blood pressure monitoring is recommended.")

    if bmi > 25:
        recommendations.append("Incorporate at least 30 minutes of daily physical activity.")

    if smoking == 1:
        recommendations.append("Smoking cessation is strongly advised.")

    # Confidence Score
    confidence_score = round(float(max(current_risk, 1 - current_risk) * 100), 2)

    # Explainable AI
    explanation = explain_prediction(model, current)

    return {
        "current_risk_percent": current_percent,
        "new_risk_percent": new_percent,
        "improvement_percent": improvement_percent,
        "risk_level": risk_level,
        "clinical_message": clinical_message,
        "confidence_score": confidence_score,
        "recommendations": recommendations,
        "explanation": explanation
    }