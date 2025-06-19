import React from 'react';
import { Check, Database, Zap, Crown, Users, BarChart3, Shield } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Data",
      price: "$299",
      period: "per project",
      description: "Perfect for small businesses and startups looking to get started with targeted data",
      icon: Database,
      color: "blue",
      features: [
        "Up to 1,000 targeted contacts",
        "Basic demographic filtering",
        "Email addresses included",
        "CSV/Excel delivery format",
        "48-hour delivery time",
        "Email support",
        "Basic data validation",
        "Single industry focus",
        "Standard data accuracy",
        "Basic export options"
      ],
      connectivity: [
        "Standard API access",
        "CSV/Excel export",
        "Email delivery",
        "Basic integration support",
        "Standard data format"
      ],
      popular: false
    },
    {
      name: "Advanced Data",
      price: "$799",
      period: "per project",
      description: "Ideal for growing businesses that need comprehensive audience insights",
      icon: Zap,
      color: "green",
      features: [
        "Up to 5,000 targeted contacts",
        "Advanced demographic filtering",
        "Email + Phone + Social profiles",
        "Multiple export formats",
        "24-hour delivery time",
        "Priority phone & email support",
        "Advanced data validation",
        "Multi-industry targeting",
        "Geographic segmentation",
        "Behavioral data insights"
      ],
      connectivity: [
        "REST API integration",
        "Real-time data sync",
        "CRM direct integration",
        "Webhook notifications",
        "Custom export formats"
      ],
      popular: true
    },
    {
      name: "Premium Data",
      price: "$1,999",
      period: "per project",
      description: "Enterprise-grade solution for large-scale data mining and business intelligence",
      icon: Crown,
      color: "purple",
      features: [
        "Up to 25,000+ targeted contacts",
        "AI-powered audience segmentation",
        "Complete contact profiles",
        "Real-time data updates",
        "Same-day delivery available",
        "Dedicated account manager",
        "99.9% data accuracy guarantee",
        "Unlimited industry targeting",
        "Advanced analytics dashboard",
        "Custom data modeling"
      ],
      connectivity: [
        "Full API suite access",
        "Real-time streaming data",
        "Enterprise CRM integration",
        "Custom database connections",
        "Advanced webhook system"
      ],
      popular: false
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    const colors = {
      blue: {
        border: popular ? 'border-blue-500' : 'border-gray-200',
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        icon: 'text-blue-600'
      },
      green: {
        border: popular ? 'border-green-500' : 'border-gray-200',
        bg: 'bg-green-50',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        icon: 'text-green-600'
      },
      purple: {
        border: popular ? 'border-purple-500' : 'border-gray-200',
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        icon: 'text-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Data Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect data package for your business needs. All plans include our 
            industry-leading data quality guarantee and secure delivery methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);
            const IconComponent = plan.icon;
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 ${colorClasses.border} ${
                  plan.popular ? 'transform scale-105 shadow-2xl' : ''
                } transition-all duration-200 hover:shadow-xl relative h-full flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className={`${colorClasses.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`h-8 w-8 ${colorClasses.icon}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <div className="mb-8 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-gray-600" />
                      Features Included
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-gray-600" />
                      Connectivity Options
                    </h4>
                    <ul className="space-y-2">
                      {plan.connectivity.map((option, optionIndex) => (
                        <li key={optionIndex} className="flex items-center">
                          <Shield className="h-4 w-4 text-blue-500 mr-3" />
                          <span className="text-gray-600 text-sm">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className={`w-full ${colorClasses.button} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md mt-auto`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For enterprise clients with unique requirements, we offer fully customized data mining 
              solutions with dedicated support and tailored pricing.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Contact for Custom Pricing
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Data Security</h4>
            <p className="text-sm text-gray-600">All data transfers are encrypted and GDPR compliant</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Check className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h4>
            <p className="text-sm text-gray-600">99.5% accuracy rate with full satisfaction guarantee</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-600">Quick turnaround times without compromising quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;