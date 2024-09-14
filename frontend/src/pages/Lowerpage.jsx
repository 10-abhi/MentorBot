import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Shield, Cloud, Cpu, Settings, Server } from 'lucide-react';

const LowerLandingSection = () => {
  const services = [
    { icon: <Monitor className="w-8 h-8" />, title: 'Software & Integration' },
    { icon: <Shield className="w-8 h-8" />, title: 'Network Security' },
    { icon: <Cloud className="w-8 h-8" />, title: 'Cloud Services' },
    { icon: <Cpu className="w-8 h-8" />, title: 'Wireless Networking' },
    { icon: <Settings className="w-8 h-8" />, title: 'IT Solutions' },
    { icon: <Server className="w-8 h-8" />, title: 'Server Configuration' },
  ];

  return (
    <section className="bg-gradient-to-br from-sky-800 via-gray-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            The service we offer is specifically<br />designed to meet your needs.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                    },
                  },
                }}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="../src/assets/final_soln.png"
                alt="Solutions illustration"
                className="rounded-lg shadow-xl"
              />
            
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-300">
                We bring solutions to make life easier for our customers.
              </h3>
              <p className="text-gray-600">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              </p>
              <ul className="space-y-2">
                {['Aenean quam ornare', 'Curabitur blandit tempus', 'Quis nostrud exercitation', 'Quis nostrud exercitation'].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className='text-slate-300'>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LowerLandingSection;