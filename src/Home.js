import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>Welcome to Our Website!</h1>
        <p style={{ color: 'white' }}> Your one-stop solution for all your needs. </p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Details about Feature 1.</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Details about Feature 2.</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Details about Feature 3.</p>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to <a href="/contact">contact us</a>.</p>
      </section>
    </div>
  );
}

export default Home;
