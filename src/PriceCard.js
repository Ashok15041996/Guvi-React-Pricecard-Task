import React from 'react';

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="price-card">
      <h3>{plan}</h3>
      <h1>{price}</h1>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.isEnabled ? 'enabled' : 'disabled'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>Button</button>
    </div>
  );
};

export default PriceCard;