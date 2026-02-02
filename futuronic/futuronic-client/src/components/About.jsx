import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-b from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] py-24 px-4 relative overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 text-light font-sans relative inline-block mx-auto">
          About Futuronic
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
        </h2>
        <p className="text-lg text-light-contrast text-center mb-16 font-sans max-w-2xl mx-auto">
          Pioneering the future of artificial intelligence and automation
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-light-contrast mb-6 leading-relaxed font-sans">
              At Futuronic, we are passionate about harnessing the transformative power of Artificial Intelligence and advanced automation. Founded on the principle of innovation, we strive to build intelligent solutions that not only solve complex business challenges but also drive unprecedented growth and efficiency.
            </p>
            <p className="text-lg text-light-contrast leading-relaxed font-sans">
              Our team of dedicated AI specialists, data scientists, and software engineers work collaboratively to deliver cutting-edge tools and platforms. We believe in a future where technology empowers humanity, and we are committed to being at the forefront of this exciting evolution, crafting solutions that are intelligent, intuitive, and impactful.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 bg-gradient-to-br from-dark-surface to-dark rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-primary">150+</div>
                <div className="text-light-contrast mt-2">Projects</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-dark-surface to-dark rounded-2xl border border-vibrant/20 shadow-lg hover:shadow-xl hover:shadow-vibrant/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-vibrant">98%</div>
                <div className="text-light-contrast mt-2">Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-dark-surface to-dark rounded-2xl border border-accent/20 shadow-lg hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-light-contrast mt-2">Clients</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-dark-surface to-dark rounded-2xl border border-secondary/20 shadow-lg hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-secondary">5+</div>
                <div className="text-light-contrast mt-2">Years Exp</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            {/* Animated AI visualization */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-r from-primary/20 to-vibrant/20 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-r from-vibrant/20 to-accent/20 animate-ping opacity-30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-primary to-vibrant flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary/30 animate-spin-slow">
                  AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animation delays */}
      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;
