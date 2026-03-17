import easyocr
import numpy as np
from PIL import Image
import io
from pdf2image import convert_from_bytes

reader = easyocr.Reader(['en'])

def extract_text(file):
    contents = file.file.read()

    try:
        # 🔥 Handle PDF
        if file.filename.lower().endswith(".pdf"):
            images = convert_from_bytes(contents)
            image = images[0]  # take first page
        else:
            # 🔥 Handle Image
            image = Image.open(io.BytesIO(contents)).convert("RGB")

        image_np = np.array(image)

        result = reader.readtext(image_np, detail=0)

        return " ".join(result)

    except Exception as e:
        print("OCR Error:", e)
        return ""