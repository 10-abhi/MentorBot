import React from 'react'
import { Bot, Trash2, MapPin, ArrowRight, Container } from 'lucide-react';


const Navbar = () => {
    function handleClick() {
        navigate('/signup');
      }

  return (
    <>
      <header className="bg-sky-950 shadow-sm h-20">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
            <Bot className="h-8 w-8 text-blue-200 mr-2" />
            <span className="text-xl font-semibold text-gray-400">MentorBot</span>
            </a>
          </div>
          <button onClick={handleClick} className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Login/Signup
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
