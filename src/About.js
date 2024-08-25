
/*
import React, { useState } from 'react';
import './index.css'; 
import photo from './images/photo_2024-07-25_06-08-41.jpg';  // استيراد الصورة

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
      <img src={photo} alt="Logo" />  
      
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
*/
import React from 'react';
import './About.css';
import photo from './images/photo_2024-07-25_06-08-41.jpg';  // استيراد الصورة

const About = () => {
  return (
    <>
      <div className="about-page">
        <header className="about-header">
          <div
            className="profile-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <img
              src={photo}
              alt="Logo"
              style={{
                width: '100px',
                height: '100px',
                marginRight: '20px',
                borderRadius: '50%',
              }}
            />
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
              About Our Team
            </h1>
          </div>
        </header>

        <section className="about-content">
          <h2>About</h2>
          <p>Welcome to our website! We are dedicated to providing you with the best service possible. Feel free to explore and learn more about what we do.</p>
          <p><em>This page is designed to give you some background information about our mission and values.</em></p>
        </section>

        <section className="mission-statement">
          <h2>Our Mission</h2>
          <p>Our mission is to deliver quality and value in everything we do.</p>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div className="team-member" style={{ textAlign: 'center' }}>
              <img src={photo} alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="team-member" style={{ textAlign: 'center' }}>
              <img src={photo} alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <h3>Jane Smith</h3>
              <p>CTO</p>
            </div>
          </div>
        </section>

        <section className="upload-section" style={{ marginTop: '20px' }}>
          <h2>Upload a File</h2>
          <input type="file" className="upload-input" style={{ marginTop: '10px' }} />
          <p className="upload-tip" style={{ fontSize: '14px', color: '#777' }}>Upload documents, images, or other files related to our work.</p>
        </section>

        <footer className="footer" style={{ marginTop: '40px', textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
          <p>© 2024 Your Company Name. All rights reserved.</p>
          <div className="social-icons">
            {/* Social media icons here */}
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
