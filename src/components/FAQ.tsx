import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive data mining and business intelligence services including audience segmentation, market research, lead generation, and data analytics. Our services help businesses connect with their ideal customers through precise and actionable data solutions.",
      icon: "database"
    },
    {
      question: "How do you ensure data accuracy?",
      answer: "We use advanced data validation techniques and quality control measures to ensure the highest level of data accuracy. Our team verifies all data points through multiple sources and implements strict data cleaning processes.",
      icon: "check-circle"
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including e-commerce, healthcare, finance, education, and more. Our solutions are tailored to meet the specific needs of each industry.",
      icon: "building"
    },
    {
      question: "How long does it take to get results?",
      answer: "The turnaround time depends on the scope of the project. For standard data mining requests, we typically deliver results within 3-5 business days. Larger projects may take longer depending on complexity.",
      icon: "clock"
    },
    {
      question: "What formats do you provide data in?",
      answer: "We provide data in multiple formats including CSV, Excel, JSON, and custom formats based on your requirements. We also offer API integration options for seamless data integration.",
      icon: "file-text"
    },
    {
      question: "How do you handle data privacy?",
      answer: "We strictly adhere to all data privacy regulations and maintain the highest standards of data security. All data is processed confidentially and we implement robust security measures to protect your information.",
      icon: "lock"
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 sm:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Find answers to common questions below.
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <svg
                        className={`w-6 h-6 text-blue-600 ${
                          activeIndex === index ? 'text-blue-800' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            item.icon === 'database' ? 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' :
                            item.icon === 'check-circle' ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' :
                            item.icon === 'building' ? 'M9 19V7m0 0a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2zM19 13a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2z' :
                            item.icon === 'clock' ? 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' :
                            item.icon === 'file-text' ? 'M7 21h10a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zm0 0h10a1 1 0 11-2 0H7a1 1 0 112 0zm0-1h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 0h10a1 1 0 10-2 0H7a1 1 0 002 0z' :
                            'M10 2H5a2 2 0 00-2 2v6a2 2 0 002 2h3v4l3-4h6a2 2 0 002-2V4a2 2 0 00-2-2h-1a2 2 0 00-2 2v6a2 2 0 00-2 2H5a2 2 0 00-2 2v6a2 2 0 002 2h1a2 2 0 002-2V4z'
                          }
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${
                      activeIndex === index ? 'rotate-180' : ''
                    } text-gray-400`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeIndex === index && (
                  <div className="mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
