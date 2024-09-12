import React from "react";
import "./PricingSection.css"; // Ensure you add the styles for the pricing section

const pricingPlans = [
  {
    id: 1,
    name: "Free Plan",
    price: "$0",
    features: [
      "Basic tracking",
      "Limited calls",
      "Access to essential features",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "$9.99/month",
    features: [
      "Unlimited tracking",
      "Up to 10 calls per month",
      "Standard support",
    ],
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "$19.99/month",
    features: [
      "Unlimited tracking",
      "Unlimited calls",
      "Priority support",
      "Advanced features",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing" id="pricing">
      <h2>Pricing</h2>
      <div className="pricing-container">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="plan-button">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
