import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = ({ className = '' }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className={`bg-gray-100 py-12 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Sandbox</h2>
          <p className="text-sm text-gray-600">© 2023 Sandbox</p>
          <p className="text-sm text-gray-600">All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-600 mb-2">IIT SEELAMPUR</p>
          <p className="text-sm text-gray-600 mb-2">Light City, London,</p>
          <p className="text-sm text-gray-600 mb-2">United Kingdom</p>
          <p className="text-sm text-gray-600 mb-2">info@email.com</p>
          <p className="text-sm text-gray-600">+91 87653 45265</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2">
            {['About Us', 'Our Story', 'Projects', 'Terms of Use', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Be Our Contributor</h3>
          <p className="text-sm text-gray-600 mb-4">Subscribe to our team to get the latest updates</p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;