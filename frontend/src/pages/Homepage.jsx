import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, Trash2, MapPin, ArrowRight, Container } from 'lucide-react';
import Footer from './Footer';
import LowerLandingSection from './Lowerpage';
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const lowerSectionRef = useRef(null);
  const navigate = useNavigate();

  function handleClick() {
    navigate('/signup');
  }


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (lowerSectionRef.current) {
      observer.observe(lowerSectionRef.current);
    }

    return () => {
      if (lowerSectionRef.current) {
        observer.unobserve(lowerSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-sky-950 shadow-sm h-20">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-200 mr-2" />
            <span className="text-xl font-semibold text-gray-400">MentorBot</span>
          </div>
          <button onClick={handleClick} className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Login/Signup
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-slate-900">
        {/* Upper Section */}
        <section className="relative overflow-hidden bg-slate-800 py-16">
          <div className="absolute inset-0 bg-slate-200 transform -skew-y-6 origin-top-left"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-gray-600 mb-2">Experts</h2>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">The Pyro AI Mentor For You</h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional in giving guidance and roadmap for tech related fields sets based on the industry analysis
              </p>
              <button className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300">
                Get Started
              </button>
            </div>
            <div id='image' className="mt-12 max-w-2xl mx-auto">
              <img
                src="../src/assets/bot.jpg"
                alt="AI Mentor"
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Lower Section */}
        {/* ... (rest of the component remains unchanged) ... */}
      </main>
      <LowerLandingSection />
      <Footer />
    </div>
  );
};

export default Homepage;