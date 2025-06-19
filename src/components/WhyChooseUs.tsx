import React from 'react';
import { Award, Clock, Users2, Zap, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry-Leading Data Quality",
      description: "We maintain the highest standards of data accuracy and freshness, with over 99.5% data accuracy rate."
    },
    {
      icon: Clock,
      title: "Fast Turnaround Time",
      description: "Get your customized data within 24-48 hours. We understand that time is crucial for your business success."
    },
    {
      icon: Users2,
      title: "Expert Data Scientists",
      description: "Our team of certified data scientists and analysts bring years of experience across multiple industries."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "We use the latest AI and machine learning algorithms to ensure the most accurate and relevant data extraction."
    }
  ];

  const achievements = [
    "Over 10,000 successful data projects delivered",
    "99.5% client satisfaction rate",
    "500+ companies trust our data solutions",
    "24/7 dedicated customer support",
    "GDPR and privacy compliant processes",
    "Real-time data validation and verification"
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Trust True Data Solution?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When it comes to your business data needs, you need a partner you can trust. 
            Here's why thousands of companies choose us for their data mining requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="text-center mb-8">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Proven Track Record of Excellence
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality and customer success has made us the preferred 
              data mining partner for businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-blue-50 px-6 py-4 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24hrs</div>
                <div className="text-sm text-gray-600">Average Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;