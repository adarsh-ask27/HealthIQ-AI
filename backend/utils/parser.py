import re

def parse_medical_values(text):
    values = {}
    
    cholesterol = re.search(r'cholesterol\s*(\d+)', text, re.IGNORECASE)
    bp = re.search(r'BP\s*(\d+)', text, re.IGNORECASE)
    sugar = re.search(r'sugar\s*(\d+)', text, re.IGNORECASE)
    
    values["cholesterol"] = int(cholesterol.group(1)) if cholesterol else 0
    values["bp"] = int(bp.group(1)) if bp else 0
    values["sugar"] = int(sugar.group(1)) if sugar else 0
    
    return values