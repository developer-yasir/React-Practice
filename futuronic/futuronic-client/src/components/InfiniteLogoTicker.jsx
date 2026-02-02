import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const InfiniteLogoTicker = ({ logos, speed = 50 }) => {
  const controls = useAnimation();
  const innerRef = useRef(null);
  const wrapperRef = useRef(null); // Ref for the div containing the logos (the one being animated)

  const duplicatedLogos = [...logos, ...logos];

  // Define pixels per second for animation speed. Higher 'speed' prop means faster.
  // Map speed (0-100) to a reasonable range of pixels per second, e.g., 50 to 200.
  const minPixelsPerSecond = 50;
  const maxPixelsPerSecond = 200;
  const pixelsPerSecond = minPixelsPerSecond + (speed / 500) * (maxPixelsPerSecond - minPixelsPerSecond);


  const animationProperties = useRef({}); // Use useRef to store animation properties

  useEffect(() => {
    if (innerRef.current) {
      const innerWidth = innerRef.current.offsetWidth;
      const distance = innerWidth;
      const duration = distance / pixelsPerSecond;

      const config = {
        x: ['0%', '-100%'],
        transition: {
          x: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
          },
        },
      };

      animationProperties.current = config; // Store the config

      controls.start(config);
    }

    return () => controls.stop();
  }, [controls, logos, pixelsPerSecond]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    // Restart animation with the same configuration
    controls.start(animationProperties.current);
  };

  return (
    <div
      className="relative w-full overflow-hidden py-12 group" // Add 'group' class for hover effects
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex"
          ref={wrapperRef}
          animate={controls}
          style={{ width: '200%' }} // This wrapper contains two sets of logos
        >
          {/* Use a separate div to measure the width of one set of logos */}
          <div ref={innerRef} className="flex flex-shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`initial-${index}-${logo.alt}`}
                className="flex items-center justify-center flex-shrink-0 px-12 py-6 group"
              >
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
          {/* The second set of logos for the loop */}
          {logos.map((logo, index) => (
            <div
              key={`duplicated-${index}-${logo.alt}`}
              className="flex items-center justify-center flex-shrink-0 px-12 py-6 group"
            >
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteLogoTicker;