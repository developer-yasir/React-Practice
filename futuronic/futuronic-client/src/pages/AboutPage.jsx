import React from 'react';
import About from '../components/About';
import TrustSignals from '../components/TrustSignals';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <About />
      <TrustSignals />
      <WhyChooseUs />
    </div>
  );
};

export default AboutPage;