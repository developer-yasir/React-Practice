import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] py-24 px-4 relative overflow-hidden" id="contact">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 text-light font-sans relative inline-block mx-auto">
          Get in Touch
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
        </h2>
        <p className="text-lg text-light-contrast text-center mb-12 font-sans max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-gradient-to-r from-vibrant/30 to-primary/30 border border-vibrant/50 rounded-xl text-vibrant text-center animate-fadeIn shadow-lg shadow-vibrant/20">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="block text-light text-sm font-bold mb-2 font-sans">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-4 bg-gradient-to-br from-[var(--surface-color)] to-gray-200 border ${
                errors.name ? 'border-red-500' : 'border-[var(--vibrant-color)]/50'
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--vibrant-color)] text-[var(--text-color)] transition-all duration-300 shadow-lg`}
              placeholder="Your Name"
            />
            {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-light text-sm font-bold mb-2 font-sans">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-4 bg-gradient-to-br from-[var(--surface-color)] to-gray-200 border ${
                errors.email ? 'border-red-500' : 'border-[var(--vibrant-color)]/50'
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--vibrant-color)] text-[var(--text-color)] transition-all duration-300 shadow-lg`}
              placeholder="your@example.com"
            />
            {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-light text-sm font-bold mb-2 font-sans">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-4 bg-gradient-to-br from-[var(--surface-color)] to-gray-200 border ${
                errors.message ? 'border-red-500' : 'border-[var(--vibrant-color)]/50'
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--vibrant-color)] text-[var(--text-color)] transition-all duration-300 resize-none shadow-lg`}
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
            {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'group relative bg-gradient-to-r from-primary to-vibrant hover:from-vibrant hover:to-accent transform hover:scale-105'
              } transition-all duration-300 text-white font-bold py-5 px-12 rounded-xl text-lg shadow-xl shadow-[var(--primary-color)]/30 hover:shadow-2xl hover:shadow-[var(--vibrant-color)]/50 font-sans w-full sm:w-auto`}
            >
              <span className="relative z-10">
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant to-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>
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

export default Contact;
