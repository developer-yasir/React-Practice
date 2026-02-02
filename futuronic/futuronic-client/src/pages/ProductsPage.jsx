import React, { useState } from 'react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    {
      id: 1,
      name: 'AI Assistant Pro',
      category: 'ai-tools',
      description: 'Advanced AI assistant for business automation and productivity enhancement.',
      features: ['Natural Language Processing', 'Automated Workflows', 'Real-time Analytics'],
      price: '$49/month',
      image: 'https://placehold.co/400x300/6366f1/ffffff?text=AI+Assistant',
      cta: 'Learn More'
    },
    {
      id: 2,
      name: 'Predictive Analytics Suite',
      category: 'analytics',
      description: 'Machine learning platform for forecasting and data insights.',
      features: ['Predictive Modeling', 'Data Visualization', 'Custom Reports'],
      price: '$99/month',
      image: 'https://placehold.co/400x300/8b5cf6/ffffff?text=Analytics',
      cta: 'Try Free'
    },
    {
      id: 3,
      name: 'Vision AI Engine',
      category: 'computer-vision',
      description: 'Computer vision solution for image recognition and analysis.',
      features: ['Image Recognition', 'Object Detection', 'Pattern Analysis'],
      price: '$79/month',
      image: 'https://placehold.co/400x300/ec4899/ffffff?text=Vision+AI',
      cta: 'Demo'
    },
    {
      id: 4,
      name: 'Chatbot Studio',
      category: 'ai-tools',
      description: 'Build and deploy custom AI chatbots for customer service.',
      features: ['Drag & Drop Interface', 'Multi-platform Support', 'Analytics Dashboard'],
      price: '$29/month',
      image: 'https://placehold.co/400x300/10b981/ffffff?text=Chatbot',
      cta: 'Start Free'
    },
    {
      id: 5,
      name: 'Data Pipeline Pro',
      category: 'data-tools',
      description: 'Automated data pipeline management and processing.',
      features: ['ETL Automation', 'Data Quality Checks', 'Monitoring'],
      price: '$149/month',
      image: 'https://placehold.co/400x300/f97316/ffffff?text=Data+Pipeline',
      cta: 'Contact Sales'
    },
    {
      id: 6,
      name: 'NLP Workbench',
      category: 'ai-tools',
      description: 'Natural language processing toolkit for text analysis.',
      features: ['Text Classification', 'Sentiment Analysis', 'Entity Recognition'],
      price: '$59/month',
      image: 'https://placehold.co/400x300/0ea5e9/ffffff?text=NLP+Workbench',
      cta: 'Learn More'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'ai-tools', name: 'AI Tools' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'computer-vision', name: 'Computer Vision' },
    { id: 'data-tools', name: 'Data Tools' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans relative inline-block mx-auto">
            Our AI Products
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
          </h1>
          <p className="text-xl text-light-contrast max-w-3xl mx-auto">
            Cutting-edge AI solutions designed to transform your business and unlock new possibilities
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-vibrant text-white shadow-lg shadow-primary/30'
                  : 'bg-dark-surface text-light-contrast hover:bg-dark hover:text-vibrant'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="bg-gradient-to-br from-dark-surface to-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-primary/20 relative overflow-hidden group"
            >
              {/* Animated background element */}
              <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full opacity-10 bg-vibrant group-hover:animate-spin-slow"></div>
              
              <div className="relative z-10">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-light mb-2">{product.name}</h3>
                  <p className="text-light-contrast mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-vibrant mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-light-contrast flex items-center">
                          <span className="text-vibrant mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-primary to-vibrant hover:from-vibrant hover:to-accent text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30">
                    {product.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add CSS for animation delays */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;