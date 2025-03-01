import React from "react";
import "./assets/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">CLUB MATHEMATICA</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#infinitum">Infinitum</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#gallery">Gallery</a></li>
      </ul>
      <div className="nav-buttons">
        <button className="btn">About Us</button>
        <button className="btn">Contact Us</button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src="/image.png" alt="Club Event" className="hero-image" />
      <div className="hero-overlay">
        <h2 className="hero-title">INF<span className="highlight">IN</span>ITUM</h2>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
