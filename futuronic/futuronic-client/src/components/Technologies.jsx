import React, { useState, useEffect } from 'react';

const TechCategory = ({ title, children }) => (
  <div className="mb-16 animate-fadeIn">
    <h3 className="text-3xl font-bold text-light mb-10 text-center font-sans flex items-center justify-center relative">
      <span className="relative z-10">{title}</span>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-vibrant"></div>
    </h3>
    <div className="flex flex-wrap justify-center gap-4">
      {children}
    </div>
  </div>
);

const TechItem = ({ name, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to stagger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay || 0);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative group bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] text-[var(--text-color)] font-bold py-4 px-8 rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl cursor-default ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        animationDelay: `${delay || 0}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-vibrant/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center">
        <span className="mr-3 text-vibrant group-hover:animate-bounce">✦</span>
        <span className="group-hover:text-vibrant transition-colors duration-300">{name}</span>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-vibrant rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

const Technologies = () => {
  return (
    <section className="bg-gradient-to-b from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] py-20 px-4" id="technologies">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-light font-sans relative inline-block mx-auto">
          Our Core Technologies
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
        </h2>

        <TechCategory title="Artificial Intelligence & Machine Learning">
          <TechItem name="TensorFlow" delay={100} />
          <TechItem name="PyTorch" delay={200} />
          <TechItem name="Scikit-learn" delay={300} />
          <TechItem name="Keras" delay={400} />
          <TechItem name="OpenCV" delay={500} />
          <TechItem name="GPT Models" delay={600} />
          <TechItem name="Reinforcement Learning" delay={700} />
        </TechCategory>

        <TechCategory title="Development Frameworks & Languages">
          <TechItem name="Python" delay={100} />
          <TechItem name="Node.js" delay={200} />
          <TechItem name="React" delay={300} />
          <TechItem name="TypeScript" delay={400} />
          <TechItem name="Go" delay={500} />
          <TechItem name="Django" delay={600} />
          <TechItem name="FastAPI" delay={700} />
        </TechCategory>

        <TechCategory title="Cloud & Deployment">
          <TechItem name="AWS" delay={100} />
          <TechItem name="Google Cloud Platform (GCP)" delay={200} />
          <TechItem name="Azure" delay={300} />
          <TechItem name="Docker" delay={400} />
          <TechItem name="Kubernetes" delay={500} />
          <TechItem name="Terraform" delay={600} />
        </TechCategory>

        <TechCategory title="Data & Analytics">
          <TechItem name="SQL" delay={100} />
          <TechItem name="NoSQL" delay={200} />
          <TechItem name="Apache Kafka" delay={300} />
          <TechItem name="Spark" delay={400} />
          <TechItem name="Pandas" delay={500} />
          <TechItem name="NumPy" delay={600} />
        </TechCategory>
      </div>
    </section>
  );
};

export default Technologies;
