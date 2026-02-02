import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We start with a comprehensive assessment of your business needs, challenges, and goals to understand how AI can best serve your organization."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our experts design a customized AI solution tailored to your specific requirements, with clear milestones and success metrics."
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "We build and seamlessly integrate your AI solution, ensuring minimal disruption to your existing operations."
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing ensures optimal performance, followed by fine-tuning to maximize effectiveness and ROI."
    },
    {
      number: "05",
      title: "Deployment & Training",
      description: "We deploy the solution and provide comprehensive training to your team for seamless adoption."
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, monitoring, and updates ensure your AI solution continues to deliver exceptional value."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[var(--surface-color)] to-[var(--bg-color)] text-[var(--text-color)] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[var(--text-color)] font-sans relative inline-block mx-auto">
            How It Works
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
          </h2>
          <p className="text-lg text-[var(--text-contrast-color)] max-w-3xl mx-auto">
            Our proven 6-step process ensures seamless AI integration and maximum business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 bg-gradient-to-br from-[var(--bg-color)] to-[var(--surface-color)] p-8 rounded-2xl border border-[var(--primary-color)]/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-vibrant flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--text-color)]">{step.title}</h3>
                <p className="text-[var(--text-contrast-color)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--text-color)]">Implementation Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-vibrant transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] p-6 rounded-2xl border border-[var(--primary-color)]/20 shadow-lg">
                      <h4 className="text-xl font-bold mb-2 text-[var(--text-color)]">{step.title}</h4>
                      <p className="text-[var(--text-contrast-color)]">{step.description}</p>
                    </div>
                  </div>
                  <div className="w-1/12 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-vibrant flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6 text-[var(--text-color)]">Ready to Transform Your Business?</h3>
          <p className="text-xl text-[var(--text-contrast-color)] mb-10 max-w-3xl mx-auto">
            Start your AI journey today with a complimentary consultation and discovery session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-primary to-vibrant hover:from-vibrant hover:to-accent text-white font-bold py-5 px-10 rounded-xl text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Schedule Consultation
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-vibrant text-vibrant hover:bg-vibrant hover:text-white font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Request Demo
            </a>
          </div>
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

export default HowItWorks;