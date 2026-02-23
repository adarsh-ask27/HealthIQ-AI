import easyocr
import shutil

reader = easyocr.Reader(['en'])

def extract_text(file):
    file_path = f"temp_{file.filename}"
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = reader.readtext(file_path, detail=0)
    text = " ".join(result)
    
    return text