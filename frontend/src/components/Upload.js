import React, { useState } from "react";
import axios from "axios";

function Upload({ onDataExtracted }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file); // ✅ IMPORTANT

      const res = await axios.post(
        "https://healthiq-backend.onrender.com/upload-report",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Extracted:", res.data);

      if (onDataExtracted) {
        onDataExtracted(res.data);
      }

      alert("Upload successful!");

    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload failed. Check backend.");
    }
  };

  return (
    <div>
      <h3>Upload Report</h3>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload & Analyze
      </button>
    </div>
  );
}

export default Upload;