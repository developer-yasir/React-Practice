import React, { useState } from 'react';

const ServiceIcon = ({ children }) => (
  <div className="text-vibrant text-5xl mb-4 flex justify-center items-center">
    {children}
  </div>
);

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'AI Solutions',
      description: 'Leverage the power of artificial intelligence to transform your business operations. From predictive analytics to natural language processing, we develop bespoke AI models that drive efficiency, innovation, and competitive advantage.',
      icon: (
        <ServiceIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9.75 9.75m0 0lt-2.25 2.25m2.25-2.25v7.5m6-6l2.25 2.25m-2.25-2.25v7.5m0-9l-2.25 2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </ServiceIcon>
      ),
    },
    {
      title: 'Automation Tools',
      description: 'Streamline your workflows and reduce manual effort with our advanced automation solutions. We design and implement intelligent systems that automate repetitive tasks, improve data accuracy, and free up your team to focus on strategic initiatives.',
      icon: (
        <ServiceIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a1.5 1.5 0 113 0v6a1.5 1.5 0 11-3 0V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75h.008v.008H12V3.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 10.5h.008v.008h-.008V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 15.75h.008v.008h-.008V15.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.5h.008v.008h-.008V7.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 12.75h.008v.008h-.008V12.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 18h.008v.008h-.008V18zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h.008v.008H7.5V7.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75h.008v.008H7.5V12.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 18h.008v.008H7.5V18zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5h.008v.008h-.008V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 15.75h.008v.008h-.008V15.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5h.008v.008H4.5V7.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75h.008v.008H4.5V12.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 18h.008v.008H4.5V18zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </ServiceIcon>
      ),
    },
    {
      title: 'Custom ML Tools',
      description: 'Empower your data-driven decisions with custom machine learning tools designed specifically for your business challenges. From specialized algorithms to integrated ML platforms, we build solutions that provide actionable insights and foster innovation.',
      icon: (
        <ServiceIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.32 10.5H5.988a6.3 6.3 0 016.634 5.658l.145.748c.2.94.92 1.7 1.83 2.025v2.332a6.3 6.3 0 01-6.634-5.658L5.988 16.5H3.32a.825.825 0 01-.65-1.35 6.3 6.3 0 016.633-5.658l.145-.748c.2-.94.92-1.7 1.83-2.025v-.373a.825.825 0 01.65-1.35 6.3 6.3 0 016.633 5.658l.145.748c.2.94.92 1.7 1.83 2.025v2.332a6.3 6.3 0 01-6.634-5.658L18.012 7.5H20.68a.825.825 0 01.65 1.35 6.3 6.3 0 01-6.633 5.658l-.145.748c-.2.94-.92 1.7-1.83 2.025v2.332a6.3 6.3 0 01-6.634-5.658L5.988 16.5H3.32a.825.825 0 01-.65-1.35 6.3 6.3 0 016.633-5.658l.145-.748c.2-.94.92-1.7 1.83-2.025V9.375a.825.825 0 01.65-1.35z" />
          </svg>
        </ServiceIcon>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] py-20 px-4" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-light font-sans relative inline-block mx-auto">
          Our Services
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-dark-surface to-dark rounded-2xl p-8 shadow-xl transition-all duration-500 transform ${
                hoveredIndex === index
                  ? 'scale-105 shadow-2xl shadow-primary/30 border border-primary/30'
                  : 'hover:scale-[1.03] hover:shadow-2xl hover:shadow-vibrant/20'
              } relative overflow-hidden`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated background element */}
              <div className={`absolute -right-10 -top-10 w-24 h-24 rounded-full opacity-10 ${
                hoveredIndex === index ? 'bg-primary animate-spin-slow' : 'bg-vibrant'
              }`}></div>

              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300 ${
                hoveredIndex === index
                  ? 'bg-gradient-to-br from-primary to-vibrant text-white transform scale-110 shadow-lg shadow-primary/30'
                  : 'bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] text-vibrant'
              }`}>
                {service.icon.props.children}
              </div>
              <h3 className={`text-2xl font-bold text-light mb-4 text-center font-sans transition-all duration-300 ${
                hoveredIndex === index ? 'text-vibrant' : ''
              }`}>{service.title}</h3>
              <p className="text-light-contrast text-center leading-relaxed font-sans transition-all duration-300">{service.description}</p>

              {/* Animated border effect */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-vibrant opacity-0 transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
