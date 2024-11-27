import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      { name: 'Image Detection', included: true },
      { name: 'Basic Reports', included: true },
      { name: 'Community Support', included: true },
      { name: 'API Access', included: false },
      { name: 'Priority Processing', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$29/mo',
    recommended: true,
    features: [
      { name: 'Image Detection', included: true },
      { name: 'Advanced Reports', included: true },
      { name: 'Priority Support', included: true },
      { name: 'API Access', included: true },
      { name: 'Priority Processing', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      { name: 'Image Detection', included: true },
      { name: 'Advanced Reports', included: true },
      { name: 'Dedicated Support', included: true },
      { name: 'API Access', included: true },
      { name: 'Priority Processing', included: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Choose Your <span className="text-[#06FF00]">Plan</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 ${
                plan.recommended
                  ? 'border-2 border-[#06FF00] bg-black'
                  : 'border border-gray-800 bg-black/50'
              } hover:transform hover:scale-105 transition-all duration-300`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#06FF00] text-black text-sm rounded-full">
                  Recommended
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-[#06FF00] mb-6">{plan.price}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center text-white">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[#06FF00] mr-2" />
                    ) : (
                      <X className="w-5 h-5 text-gray-500 mr-2" />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 rounded-lg border border-[#06FF00] text-[#06FF00] hover:bg-[#06FF00] hover:text-black transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;