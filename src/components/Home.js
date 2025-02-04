import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home-container"> {/* Wrap everything inside <main> */}
      <div className="hero-section">
        <h1>Welcome to the AI Travel Planner</h1>
        <p>Your personalized guide to the best travel experiences in India.</p>
        <button className="cta-button">Start Planning</button>
      </div>

      {/* Chatbot Button Section */}
      <div className="chatbot-section">
        <h2>Need Travel Recommendations?</h2>
        <p>Chat with our AI-powered Recommender for personalized travel suggestions.</p>
        <Link to="/chatwithus">
          <button className="chatbot-button">Chat with Recommender</button>
        </Link>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h2>Explore Hotels</h2>
          <p>Find the best hotels to stay in for your perfect vacation.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <h2>Adventure Activities</h2>
          <p>Get recommendations for thrilling adventures and activities.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <h2>Local Food</h2>
          <p>Discover local delicacies and food experiences to try.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <h2>Cultural Tours</h2>
          <p>Explore cultural heritage and historical sites.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <h2>Wellness Retreats</h2>
          <p>Find peaceful wellness retreats for a relaxing getaway.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <h2>Beach Getaways</h2>
          <p>Unwind at beautiful beach locations across India.</p>
          <button className="feature-button">Explore</button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 AI Travel Planner. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:info@aiplanner.com">Contact Us</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
