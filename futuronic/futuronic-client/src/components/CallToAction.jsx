import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans animate-pulse-slow">Ready to Transform Your Business?</h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-sans">
          Let Futuronic empower your enterprise with intelligent AI solutions and cutting-edge automation tools.
        </p>
        <a
          href="#contact"
          className="inline-block group relative bg-gradient-to-r from-vibrant to-accent hover:from-secondary hover:to-vibrant transition-all duration-500 text-white font-bold py-6 px-16 rounded-2xl text-xl shadow-2xl shadow-vibrant/30 hover:shadow-2xl hover:shadow-vibrant/50 transform hover:scale-105 transition-transform"
        >
          <span className="relative z-10">Start Your AI Journey</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        </a>
      </div>

      {/* Add CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
