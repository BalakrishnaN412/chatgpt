import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <section className="hero">
        <h1>QuizMaster Pro</h1>
        <p>Beautiful assessments made easy.</p>
        <div className="cta-buttons">
          <Link to="/login" className="btn">Get Started</Link>
          <Link to="/pricing" className="btn secondary">Pricing</Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
