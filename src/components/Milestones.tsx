import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, Award, Rocket } from 'lucide-react';
import Countup from './Countup';

const milestones = [
  {
    icon: Database,
    title: 'Data Points Processed',
    value: 1000000,
    description: 'Millions of data points analyzed daily',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Users,
    title: 'Happy Clients',
    value: 500,
    description: 'Businesses empowered with data insights',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Award,
    title: 'Success Rate',
    value: 98,
    description: '% client satisfaction rate',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Rocket,
    title: 'Growth Rate',
    value: 200,
    description: '% year-over-year growth',
    color: 'bg-orange-100 text-orange-600'
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 text-white">
            <Database className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-blue-800 sm:text-5xl mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the numbers that define our journey and success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={milestone.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-24 h-24 ${milestone.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                     style={{ transition: 'transform 0.3s ease-in-out' }}
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(360deg)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
                >
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  <Countup from={0} to={milestone.value} duration={2} separator={milestone.title === 'Success Rate' ? '%' : milestone.value > 999 ? ',' : ''} />
                </h3>
                <p className="text-xl font-semibold mb-3 text-gray-700">{milestone.title}</p>
                <p className="text-gray-600 text-lg">{milestone.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and our dedication to helping businesses succeed through data-driven solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
