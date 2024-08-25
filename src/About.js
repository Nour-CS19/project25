import React, { useState } from 'react';
import './index.css'; 

function About() {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
<img src="" alt="Logo" />

      <h2>About</h2>
      
      <p>
        Welcome to our website! We are dedicated to providing you with the best service possible. 
        Feel free to explore and learn more about what we do.
      </p>

      <p>
        This page is designed to give you some background information about our mission and values.
      </p>

      <div style={{ marginTop: '20px' }}>
        <h3>Upload a File</h3>
        <input type="file" onChange={handleFileUpload} />
        {fileName && <p>Uploaded file: {fileName}</p>}
      </div>
    </div>
  );
}

export default About;
