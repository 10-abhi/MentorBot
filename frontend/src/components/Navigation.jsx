import React from 'react'
// import a from 'next/link'
import { MapPin, BookOpen, BarChart2, Bell, Bot } from 'lucide-react'

function NavLink({ href, children, icon }) {
  return (
    <a href={href} className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
      {icon}
      <span className="ml-2">{children}</span>
    </a>
  )
}

function MobileNavLink({ href, children, icon }) {
  return (
    <a href={href} className="flex items-center px-3 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
      {icon}
      <span className="ml-2">{children}</span>
    </a>
  )
}

export default function Navigation() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
            <Bot className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-semibold text-gray-700">MentorBot</span>
            </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/dashboard" icon={<MapPin className="w-5 h-5" />}>
                Dashboard
              </NavLink>
              <NavLink href="/career-path" icon={<MapPin className="w-5 h-5" />}>
                Career Path
              </NavLink>
              <NavLink href="/resources" icon={<BookOpen className="w-5 h-5" />}>
                Resources
              </NavLink>
              <NavLink href="/progress" icon={<BarChart2 className="w-5 h-5" />}>
                Progress
              </NavLink>
              <NavLink href="/notifications" icon={<Bell className="w-5 h-5" />}>
                Notifications
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavLink href="/career-path" icon={<MapPin className="w-5 h-5" />}>
            Career Path
          </MobileNavLink>
          <MobileNavLink href="/resources" icon={<BookOpen className="w-5 h-5" />}>
            Resources
          </MobileNavLink>
          <MobileNavLink href="/progress" icon={<BarChart2 className="w-5 h-5" />}>
            Progress
          </MobileNavLink>
          <MobileNavLink href="/notifications" icon={<Bell className="w-5 h-5" />}>
            Notifications
          </MobileNavLink>
        </div>
      </div>
    </nav>
  )
}
