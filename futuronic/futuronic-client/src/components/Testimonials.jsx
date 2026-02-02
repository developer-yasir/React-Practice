import React, { useState, useEffect } from 'react';
import StarIcon from './icons/StarIcon';
import LeftArrowIcon from './icons/LeftArrowIcon';
import RightArrowIcon from './icons/RightArrowIcon';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, Tech Innovations",
      content: "Futuronic transformed our business with their AI solutions. Their team delivered beyond our expectations, increasing our operational efficiency by 40% and reducing costs by $2.3M annually.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      company: "Tech Innovations",
      result: "+40% Efficiency, $2.3M Annual Savings"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Director, Global Systems",
      content: "The automation tools developed by Futuronic saved us 150+ hours weekly. Their attention to detail and innovative approach is unmatched. ROI achieved in 3 months.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      company: "Global Systems",
      result: "150+ Hours Saved/Week, 3-Month ROI"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CEO, Data Dynamics",
      content: "Working with Futuronic was a game-changer. Their custom ML tools provided insights that increased our revenue by 25% and improved customer satisfaction scores by 40 points.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      company: "Data Dynamics",
      result: "25% Revenue Increase, 40pt Satisfaction Boost"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Engineering Lead, Future Labs",
      content: "The team delivered a sophisticated AI solution that perfectly fits our complex requirements. We saw 99.9% uptime and 50% faster processing times. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 5,
      company: "Future Labs",
      result: "99.9% Uptime, 50% Faster Processing"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gradient-to-b from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] py-24 px-4 relative overflow-hidden" id="testimonials">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 text-[var(--text-color)] font-sans relative inline-block mx-auto">
          Trusted by Industry Leaders
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
        </h2>
        <p className="text-lg text-[var(--text-contrast-color)] text-center mb-16 font-sans max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients and see real results
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] rounded-2xl p-8 md:p-10 shadow-2xl border border-[var(--primary-color)]/20 transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
            {/* Animated background element */}
            <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full opacity-10 bg-vibrant animate-spin-slow"></div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-vibrant shadow-lg shadow-vibrant/30"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-vibrant" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461c.969 0 1.371-1.24.588-1.81l-1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic text-[var(--text-contrast-color)] mb-4">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="mt-6 p-4 bg-gradient-to-r from-[var(--surface-color)] to-[var(--bg-color)] rounded-xl border border-[var(--vibrant-color)]/20">
                  <div className="text-vibrant font-bold text-lg">{testimonials[currentIndex].result}</div>
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-vibrant">{testimonials[currentIndex].name}</h4>
                  <p className="text-[var(--text-contrast-color)]">{testimonials[currentIndex].role}</p>
                  <p className="text-[var(--text-contrast-color)] font-semibold">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-gradient-to-r from-primary to-vibrant text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-vibrant/30 transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-gradient-to-r from-primary to-vibrant text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-vibrant/30 transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-primary to-vibrant w-10'
                    : 'bg-gray-600 hover:bg-vibrant'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
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

export default Testimonials;