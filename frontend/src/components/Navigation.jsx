import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MapPin, BookOpen, BarChart2, Bell, Bot } from 'lucide-react'

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const NavItem = ({ to, children, icon }) => {
    const isActive = location.pathname === to
    return (
      <button
        onClick={() => navigate(to)}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
          isActive
            ? 'border-indigo-500 text-gray-900'
            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
        }`}
      >
        {React.cloneElement(icon, { className: `w-5 h-5 ${isActive ? 'text-indigo-500' : ''}` })}
        <span className="ml-2">{children}</span>
      </button>
    )
  }

  const MobileNavItem = ({ to, children, icon }) => {
    const isActive = location.pathname === to
    return (
      <button
        onClick={() => navigate(to)}
        className={`flex items-center px-3 py-2 border-l-4 text-base font-medium w-full text-left ${
          isActive
            ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
        }`}
      >
        {React.cloneElement(icon, { className: `w-5 h-5 ${isActive ? 'text-indigo-500' : ''}` })}
        <span className="ml-2">{children}</span>
      </button>
    )
  }

  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <button onClick={() => navigate('/')} className="flex items-center">
                <Bot className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-semibold text-gray-700">MentorBot</span>
              </button>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavItem to="/dashboard" icon={<MapPin />}>
                Dashboard
              </NavItem>
              <NavItem to="/career-path" icon={<MapPin />}>
                Career Path
              </NavItem>
              <NavItem to="/resources" icon={<BookOpen />}>
                Resources
              </NavItem>
              <NavItem to="/progress" icon={<BarChart2 />}>
                Progress
              </NavItem>
              <NavItem to="/notifications" icon={<Bell />}>
                Notifications
              </NavItem>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavItem to="/career-path" icon={<MapPin />}>
            Career Path
          </MobileNavItem>
          <MobileNavItem to="/resources" icon={<BookOpen />}>
            Resources
          </MobileNavItem>
          <MobileNavItem to="/progress" icon={<BarChart2 />}>
            Progress
          </MobileNavItem>
          <MobileNavItem to="/notifications" icon={<Bell />}>
            Notifications
          </MobileNavItem>
        </div>
      </div>
    </nav>
  )
}