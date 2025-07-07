import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechPro Solutions",
    quote: "True Data Solution has revolutionized our marketing strategy. Their precise data insights have helped us target our ideal audience with unprecedented accuracy.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    company: "E-Commerce Hub",
    quote: "The quality of data provided by True Data Solution is unmatched. Their attention to detail and commitment to accuracy has significantly improved our business intelligence.",
    rating: 5
  },
  {
    name: "Emily White",
    role: "CEO",
    company: "Digital Marketing Inc.",
    quote: "Working with True Data Solution has been a game-changer for our business. Their data-driven approach has helped us make informed decisions and grow our client base.",
    rating: 5
  },
  {
    name: "David Brown",
    role: "Business Owner",
    company: "Retail Empire",
    quote: "I was skeptical about data mining services, but True Data Solution proved me wrong. Their insights have helped optimize our operations and increase profits.",
    rating: 4.5
  }
];

const TestimonialCard = ({ testimonial, active }: { testimonial: Testimonial, active: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-2xl font-semibold">{testimonial.name[0]}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-600">{`${testimonial.role} at ${testimonial.company}`}</p>
        </div>
      </div>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
  </motion.div>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-100 text-yellow-600">
            <Star className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about our data solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-yellow-50 flex items-center justify-center">
              <Star className="w-24 h-24 text-yellow-100" />
            </div>
          </div>
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentIndex}
                testimonial={testimonials[currentIndex]}
                active={true}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
