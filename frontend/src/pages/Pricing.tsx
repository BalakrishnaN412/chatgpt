import React from 'react';
import './Pricing.css';

const PricingPage: React.FC = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing</h2>
      <div className="plans">
        <div className="plan">
          <h3>Free</h3>
          <p className="price">$0</p>
          <p>Limited exams and users.</p>
        </div>
        <div className="plan">
          <h3>Individual</h3>
          <p className="price">$9/mo</p>
          <p>Great for trainers and educators.</p>
        </div>
        <div className="plan">
          <h3>Enterprise</h3>
          <p className="price">Contact us</p>
          <p>Unlimited access for organizations.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
