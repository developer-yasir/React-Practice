import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[var(--bg-color)] via-[var(--surface-color)] to-[var(--bg-color)] text-[var(--text-color)] h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-color)] via-[var(--surface-color)] to-[var(--bg-color)]"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,[var(--primary-color)_1px,transparent_1px),linear-gradient(to_bottom,[var(--primary-color)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-vibrant animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-vibrant/10 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-accent/10 rotate-45 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-10 h-10 border-2 border-vibrant/30 rounded-full animate-bounce animation-delay-3000"></div>

        {/* Animated rings */}
        <div className="absolute top-1/5 left-1/5 w-64 h-64 border border-primary/20 rounded-full animate-spin-slow opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-vibrant/20 rounded-full animate-spin-slow animation-delay-5000 opacity-20"></div>
      </div>

      <div className={`relative z-10 text-center max-w-6xl px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Main headline */}
        <div className="mb-8 animate-slideUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 font-sans">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-vibrant mb-2 animate-pulse">Unleash the Power of AI</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-[var(--text-contrast-color)] font-normal mt-4">Transforming Industries with Futuronic</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[var(--text-contrast-color)] mb-12 max-w-3xl mx-auto font-sans animate-slideUp" style={{ animationDelay: '0.2s' }}>
          Pioneering artificial intelligence solutions and automation tools to redefine industries and empower your future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slideUp" style={{ animationDelay: '0.4s' }}>

          {/* Primary CTA */}
          <a
            href="#services"
            className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-2xl 
               bg-gradient-to-r from-primary to-vibrant text-white shadow-lg shadow-primary/40
               transition-all duration-300 hover:scale-[1.07] hover:shadow-primary/60"
          >
            <span className="relative z-10">Explore Solutions</span>
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-vibrant to-accent opacity-0 
                     transition-opacity duration-300 hover:opacity-100"></span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="backdrop-blur-md bg-white/5 border border-vibrant/60 text-vibrant px-10 py-5 text-lg 
               rounded-2xl font-semibold shadow-md shadow-vibrant/20 
               transition-all duration-300 hover:bg-vibrant hover:text-white hover:shadow-vibrant/40 
               hover:scale-[1.05]"
          >
            Contact Us
          </a>

        </div>


        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] p-6 rounded-2xl border border-[var(--primary-color)]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-[var(--text-contrast-color)]">Happy Clients</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] p-6 rounded-2xl border border-[var(--vibrant-color)]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-vibrant mb-2">150+</div>
            <div className="text-[var(--text-contrast-color)]">Projects Done</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] p-6 rounded-2xl border border-[var(--accent-color)]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-[var(--text-contrast-color)]">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      {/* Scroll indicator - Temporarily removed SVG for debugging */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" className="text-[var(--text-contrast-color)] flex flex-col items-center">
          <span className="text-sm mb-1">Discover More</span>
        </a>
      </div>

      {/* Add CSS for animation delays */}
      <style>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
