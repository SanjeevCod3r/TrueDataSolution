import React from 'react';
import { Search, Users, BarChart3, Filter, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Advanced Data Mining",
      description: "Extract valuable insights from complex datasets using cutting-edge mining techniques and algorithms."
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Identify and segment your target audience with precision to maximize your marketing ROI."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform raw data into actionable business intelligence that drives strategic decisions."
    },
    {
      icon: Filter,
      title: "Data Filtering & Cleansing",
      description: "Ensure data accuracy and relevance through our comprehensive filtering and cleansing processes."
    },
    {
      icon: Globe,
      title: "Market Research Data",
      description: "Access comprehensive market research data to understand trends, competitors, and opportunities."
    },
    {
      icon: Shield,
      title: "Secure Data Delivery",
      description: "Receive your data through secure, encrypted channels with full compliance and privacy protection."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Data Mining Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive data solutions tailored to your business needs. 
            Our expertise ensures you get the right data to reach the right audience at the right time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:bg-blue-50 transition-colors duration-200 group"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Importance of Correct Audience Targeting
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                In today's competitive landscape, targeting the wrong audience can cost your business 
                thousands of dollars in wasted marketing spend. Our precision data mining ensures 
                you connect with prospects who are genuinely interested in your products or services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-gray-600">Higher conversion rates with targeted data</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                  <p className="text-gray-600">Reduction in marketing costs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
                  <p className="text-gray-600">Faster business growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;