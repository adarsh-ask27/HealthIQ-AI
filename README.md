# 🏥 HealthIQ AI  
### Understand. Predict. Prevent.

HealthIQ AI is an AI-driven healthcare solution that predicts cardiovascular risk, simulates future lifestyle improvements, and provides explainable AI-based recommendations to enhance healthcare delivery, patient engagement, and health literacy.

---

## 🚀 Problem Statement

Cardiovascular diseases account for over 27% of global deaths.  
Many individuals receive medical reports but struggle to understand their health risk or how lifestyle changes impact long-term outcomes.

Most digital health tools are reactive — they analyze data but do not empower users to visualize future risk reduction.

HealthIQ AI shifts healthcare from reactive treatment to proactive prevention.

---

## 💡 Solution Overview

HealthIQ AI provides:

- 🧠 AI-based 5-year cardiovascular risk prediction
- 🔮 Future lifestyle simulation engine
- 📊 Animated risk comparison visualization
- 🧾 Explainable AI (feature contribution analysis)
- 💬 Clinical interpretation in simple language
- 📋 Personalized preventive recommendations
- 📄 OCR-based medical report extraction
- 📈 Model confidence score display

The system improves health literacy and empowers individuals to take preventive action.

---

## ✨ Key Features

### 🔬 Risk Prediction
Uses a trained machine learning model to estimate cardiovascular risk based on:
- Age
- Cholesterol
- Blood Pressure
- BMI
- Smoking status

### 🔮 Future Risk Simulation
Users can simulate lifestyle improvements such as:
- Lower cholesterol
- Reduced blood pressure
- Weight reduction
- Smoking cessation

The system recalculates and visualizes risk reduction instantly.

### 🧠 Explainable AI
Displays major contributing risk factors to increase transparency and trust.

### 📊 Animated Risk Graph
Visual comparison between:
- Current 5-year risk
- Improved 5-year risk

### 💬 Health Literacy Mode
Provides simplified clinical interpretation for better patient understanding.

### 📄 Medical Report Upload
OCR-based extraction of medical values from uploaded reports.

---

## 🛠 Tech Stack

### 🔹 Backend
- FastAPI
- Scikit-Learn
- Pandas
- NumPy
- EasyOCR
- Joblib

### 🔹 Frontend
- React.js
- Recharts (Animated Graphs)
- Axios

### 🔹 Machine Learning
- Logistic Regression Model
- Feature Contribution Analysis
- Probability-based Risk Classification

---

## 🏗 System Architecture

1. User inputs health parameters or uploads report.
2. Backend ML model predicts 5-year cardiovascular risk.
3. Simulation engine recalculates risk after lifestyle changes.
4. Explainable AI identifies major contributing factors.
5. System generates recommendations and clinical explanation.
6. Frontend displays animated graph and results dashboard.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/HealthIQ-AI.git
cd HealthIQ-AI
```

---

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at:
```
http://localhost:8000
```

Swagger Docs:
```
http://localhost:8000/docs
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs at:
```
http://localhost:3000
```

---

## 🔄 API Endpoints

### POST `/simulate-risk`
Predicts cardiovascular risk and returns:

- Current Risk %
- Improved Risk %
- Risk Level
- Clinical Message
- Confidence Score
- Recommendations
- Feature Explanation

### POST `/upload-report`
Extracts medical values from uploaded report using OCR.

---

## 📊 Example Output

```json
{
  "current_risk_percent": 42.5,
  "new_risk_percent": 25.3,
  "improvement_percent": 17.2,
  "risk_level": "High",
  "clinical_message": "Your estimated 5-year cardiovascular risk is High.",
  "confidence_score": 81.3,
  "recommendations": [
    "Reduce saturated fat intake.",
    "Smoking cessation is strongly advised."
  ],
  "explanation": {
    "cholesterol": 0.45,
    "bp": 0.30
  }
}
```

---

## 🔐 Data Privacy & Ethics

- All predictions run locally.
- No personal health data is stored.
- Model provides risk estimation, not medical diagnosis.
- Designed to assist, not replace healthcare professionals.

---

## 📈 Impact

HealthIQ AI empowers individuals to:

- Understand their cardiovascular risk
- Visualize long-term consequences
- Take preventive lifestyle action
- Improve health literacy
- Reduce future hospitalization risk

---

## 🎯 Alignment with Hackathon Theme

✔ Enhances healthcare delivery  
✔ Improves patient engagement  
✔ Improves health literacy  
✔ Builds a transformative AI-powered preventive tool  

---

## 👨‍💻 Team

**Team Name:** ____________________  
**Members:** ____________________  

---

## 🔮 Future Scope

- Multi-disease risk prediction
- SHAP-based advanced explainability
- Cloud deployment
- Mobile app integration
- Integration with wearable devices
- Multilingual support

---

## 🏆 Vision

HealthIQ AI aims to transform preventive healthcare by making AI-powered risk intelligence accessible, understandable, and actionable for everyone.

---

**Understand. Predict. Prevent.**