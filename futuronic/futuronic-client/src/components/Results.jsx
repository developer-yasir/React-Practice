import React from 'react';

const Results = () => {
  const results = [
    {
      number: "500+",
      label: "Businesses Transformed",
      description: "Companies that have revolutionized their operations with our AI solutions"
    },
    {
      number: "40%",
      label: "Average Efficiency Gain",
      description: "Our clients typically see a 40% improvement in operational efficiency"
    },
    {
      number: "$50M+",
      label: "Cost Savings Generated",
      description: "Total cost savings achieved by our clients through automation"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Our clients rate our services as excellent or outstanding"
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
        <h2 className="text-4xl font-bold text-center mb-6 text-[var(--text-color)] font-sans relative inline-block mx-auto">
          Proven Results
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
        </h2>
        <p className="text-lg text-[var(--text-contrast-color)] text-center mb-16 font-sans max-w-3xl mx-auto">
          Real metrics from real clients. See how we've transformed businesses with AI and automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {results.map((result, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[var(--bg-color)] to-[var(--surface-color)] p-8 rounded-2xl border border-[var(--primary-color)]/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-5xl font-bold text-vibrant mb-4">{result.number}</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-color)]">{result.label}</h3>
              <p className="text-[var(--text-contrast-color)]">{result.description}</p>
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="mt-20 bg-gradient-to-r from-[var(--surface-color)] to-[var(--bg-color)] p-10 rounded-3xl border border-[var(--vibrant-color)]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[var(--text-color)]">Case Study: TechCorp Success</h3>
              <p className="text-[var(--text-contrast-color)] mb-6">
                TechCorp implemented our AI automation suite and achieved remarkable results in just 6 months.
              </p>
              <ul className="space-y-3 text-[var(--text-contrast-color)]">
                <li className="flex items-center">
                  <span className="text-vibrant mr-3">✓</span>
                  <span>50% reduction in operational costs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-vibrant mr-3">✓</span>
                  <span>60% faster processing times</span>
                </li>
                <li className="flex items-center">
                  <span className="text-vibrant mr-3">✓</span>
                  <span>99.9% system uptime achieved</span>
                </li>
                <li className="flex items-center">
                  <span className="text-vibrant mr-3">✓</span>
                  <span>$3.2M annual savings realized</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[var(--bg-color)] to-[var(--surface-color)] p-8 rounded-2xl border border-[var(--primary-color)]/20 shadow-lg">
              <h4 className="text-2xl font-bold mb-6 text-vibrant">ROI Breakdown</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[var(--text-contrast-color)]">Initial Investment</span>
                    <span className="text-[var(--text-color)]">$800K</span>
                  </div>
                  <div className="w-full bg-[var(--surface-color)] h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-vibrant h-full w-1/2"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[var(--text-contrast-color)]">First Year Savings</span>
                    <span className="text-[var(--text-color)]">$2.1M</span>
                  </div>
                  <div className="w-full bg-[var(--surface-color)] h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-vibrant to-accent h-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[var(--text-contrast-color)]">ROI Achieved</span>
                    <span className="text-[var(--text-color)]">162%</span>
                  </div>
                  <div className="w-full bg-[var(--surface-color)] h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-accent to-primary h-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
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

export default Results;