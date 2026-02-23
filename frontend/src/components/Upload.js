import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://127.0.0.1:8000/upload-report",
      formData
    );

    console.log(res.data);
    alert("Report Processed! Check console.");
  };

  return (
    <div>
      <h2>Upload Medical Report</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Upload;