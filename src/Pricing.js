import React from 'react';
import PriceCard from './PriceCard';

const pricingPlans = [
  {
    plan: 'FREE',
    price: '$0/month',
    features: [
      { name: 'Single User', isEnabled: true },
      { name: '50GB Storage', isEnabled: true },
      { name: 'Unlimited Public Projects', isEnabled: true },
      { name: 'Community Access', isEnabled: true },
      { name: 'Unlimited Private Projects', isEnabled: false },
      { name: 'Dedicated Phone Support', isEnabled: false },
      { name: 'Free Subdomain', isEnabled: false },
      { name: 'Monthly Status Reports', isEnabled: false },
    ],
  },
  {
    plan: 'PLUS',
    price: '$9/month',
    features: [
      { name: '5 Users', isEnabled: true },
      { name: '50GB Storage', isEnabled: true },
      { name: 'Unlimited Public Projects', isEnabled: true },
      { name: 'Community Access', isEnabled: true },
      { name: 'Unlimited Private Projects', isEnabled: true },
      { name: 'Dedicated Phone Support', isEnabled: true },
      { name: 'Free Subdomain', isEnabled: true },
      { name: 'Monthly Status Reports', isEnabled: false },
    ],
  },
  {
    plan: 'PRO',
    price: '$49/month',
    features: [
      { name: 'Unlimited Users', isEnabled: true },
      { name: '50GB Storage', isEnabled: true },
      { name: 'Unlimited Public Projects', isEnabled: true },
      { name: 'Community Access', isEnabled: true },
      { name: 'Unlimited Private Projects', isEnabled: true },
      { name: 'Dedicated Phone Support', isEnabled: true },
      { name: 'Free Subdomain', isEnabled: true },
      { name: 'Monthly Status Reports', isEnabled: true },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="pricing">
      {pricingPlans.map((plan, index) => (
        <PriceCard
          key={index}
          plan={plan.plan}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
};

export default Pricing;