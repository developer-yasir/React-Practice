import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import InfiniteLogoTicker from '../components/InfiniteLogoTicker';


const sampleLogos = [
  { src: 'https://companieslogo.com/img/128/GOOG-db4ce2fa.png?t=1760142758', alt: 'Alphabet (Google)' },
  { src: 'https://companieslogo.com/img/128/AAPL-561df3a5.png?t=1720244490', alt: 'Apple' },
  { src: 'https://companieslogo.com/img/128/MSFT-d4084efe.png?t=1722952497', alt: 'Microsoft' },
  { src: 'https://companieslogo.com/img/128/META-bdde1ff6.png?t=1720244492', alt: 'Meta Platforms (Facebook)' },
  { src: 'https://companieslogo.com/img/128/NVDA-a0685949.png?t=1722952498', alt: 'NVIDIA' },
  { src: 'https://companieslogo.com/img/128/AMZN-a0a79e0f.png?t=1740113564', alt: 'Amazon' },
  { src: 'https://companieslogo.com/img/128/TSLA-003fc2b3.png?t=1740128273', alt: 'Tesla' },
  { src: 'https://companieslogo.com/img/128/AVGO-64692aa1.png?t=1722952492', alt: 'Broadcom' },
  { src: 'https://companieslogo.com/img/128/IBM-66248cb0.png?t=1720244492', alt: 'IBM' },
  { src: 'https://companieslogo.com/img/128/ORCL-401a5cf0.png?t=1740130451', alt: 'Oracle' },
  { src: 'https://companieslogo.com/img/128/INTC-b4f05dd2.png?t=1720244492', alt: 'Intel' },
  { src: 'https://companieslogo.com/img/128/AMD-b72258b0.png?t=1720244490', alt: 'AMD' },
  { src: 'https://companieslogo.com/img/128/NFLX-22c5791a.png?t=1720244493', alt: 'Netflix' },
  { src: 'https://companieslogo.com/img/128/CSCO-4ae36ef9.png?t=1728111511', alt: 'Cisco' },
  { src: 'https://companieslogo.com/img/128/CRM-da285e55.png?t=1720244491', alt: 'Salesforce' },
  { src: 'https://companieslogo.com/img/128/MA-c5ac758c.png?t=1724308669', alt: 'Mastercard' },
  { src: 'https://companieslogo.com/img/128/WMT-89d8fde7.png?t=1737085433', alt: 'Walmart' },
  { src: 'https://companieslogo.com/img/128/V-6f36b1b0.png?t=1720244494', alt: 'Visa' },
  { src: 'https://companieslogo.com/img/128/JPM-de90e814.png?t=1720244492', alt: 'JPMorgan Chase' },
  { src: 'https://companieslogo.com/img/128/PG-94d02266.png?t=1720244493', alt: 'Procter & Gamble' },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <Hero />
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold mb-4">Our Valued Partners</h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Trusted by industry leaders and innovative startups alike, our partners are at the forefront of their fields. Join the ranks of companies shaping the future.
        </p>
        <InfiniteLogoTicker logos={sampleLogos} speed={70} />
      </section>
      <About />
      <Services />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;
