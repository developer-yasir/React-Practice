import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$99' : '$990',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Automation Tools',
        'Up to 10,000 API calls/month',
        'Email Support',
        'Standard Integrations',
        'Basic Analytics Dashboard'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$299' : '$2,990',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Automation',
        'Up to 100,000 API calls/month',
        'Priority Email & Chat Support',
        'Custom Integrations',
        'Advanced Analytics Dashboard',
        'Dedicated Account Manager',
        'Monthly Performance Reviews'
      ],
      cta: 'Try Free for 14 Days',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Full AI Suite Access',
        'Unlimited API calls',
        '24/7 Phone & Chat Support',
        'Custom Integrations',
        'White-label Solutions',
        'Dedicated Technical Team',
        'Quarterly Business Reviews',
        'Custom Development Projects'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[var(--text-color)] font-sans relative inline-block mx-auto">
            Simple, Transparent Pricing
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
          </h2>
          <p className="text-lg text-[var(--text-contrast-color)] max-w-3xl mx-auto mb-10">
            Choose the plan that fits your business needs. All plans include our core AI capabilities.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-16">
            <span className={`mr-4 font-medium ${billingCycle === 'monthly' ? 'text-[var(--text-contrast-color)]' : 'text-vibrant'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative rounded-full w-16 h-8 bg-gradient-to-r from-primary to-vibrant"
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                billingCycle === 'monthly' ? 'left-1' : 'left-9'
              }`}></div>
            </button>
            <span className={`ml-4 font-medium ${billingCycle === 'yearly' ? 'text-[var(--text-contrast-color)]' : 'text-vibrant'}`}>
              Yearly <span className="text-sm bg-gradient-to-r from-primary to-vibrant text-transparent bg-clip-text">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] rounded-2xl p-8 border shadow-xl transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? 'border-vibrant ring-2 ring-vibrant/20 ring-offset-2 ring-offset-[var(--bg-color)]' 
                  : 'border-[var(--primary-color)]/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-vibrant to-primary text-white text-sm font-bold px-6 py-2 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-[var(--text-color)]">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-vibrant">{plan.price}</span>
                  <span className="text-[var(--text-contrast-color)]">{plan.period}</span>
                </div>
                <p className="text-[var(--text-contrast-color)]">{plan.description}</p>
              </div>
              
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-vibrant mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[var(--text-contrast-color)]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-vibrant hover:from-vibrant hover:to-accent text-white shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50'
                    : 'bg-gradient-to-r from-[var(--surface-color)] to-gray-700 hover:from-gray-700 hover:to-gray-800 text-[var(--text-color)] border border-[var(--primary-color)]/30'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Free Trial Banner */}
        <div className="mt-16 bg-gradient-to-r from-[var(--surface-color)] to-[var(--bg-color)] p-8 rounded-2xl border border-[var(--vibrant-color)]/30 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">Not Ready to Commit?</h3>
          <p className="text-[var(--text-contrast-color)] mb-6 max-w-2xl mx-auto">
            Start with our 14-day free trial. No credit card required. Experience the power of our AI solutions risk-free.
          </p>
          <button className="bg-gradient-to-r from-vibrant to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg shadow-vibrant/30 hover:shadow-2xl hover:shadow-vibrant/50 transition-all duration-300 transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Add CSS for animation delays */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Pricing;