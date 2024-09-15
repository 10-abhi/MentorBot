import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import {
  Settings,
  HelpCircle,
  LogOut,
  User,
  FileText,
  DollarSign,
  MoreHorizontal,
  Bot,
} from "lucide-react";
import MyCalendar from "../components/Calendar";
import UserProfile from "../components/UserProfile";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import ExpandableChatBot from "../components/ExpandableChatBot";

const apiData = [
  { time: "09:30 AM", calls: 30 },
  { time: "10:30 AM", calls: 45 },
  { time: "11:30 AM", calls: 35 },
  { time: "12:30 PM", calls: 60 },
  { time: "01:30 PM", calls: 75 },
  { time: "02:30 PM", calls: 85 },
  { time: "03:30 PM", calls: 80 },
];

const pieData = [
  { name: "Re-used APIs", value: 36, color: "#FF6B6B" },
  { name: "Webhooks", value: 38, color: "#4ECDC4" },
  { name: "API Calls", value: 25, color: "#45B7D1" },
];

const pnlData = [
  { name: "Python", value: 36, color: "#FF6B6B" },
  { name: "C++", value: 38, color: "#4ECDC4" },
  { name: "Java", value: 25, color: "#45B7D1" },
  { name: "Ruby", value: 25, color: "#45B7D1" },
];

const attendedCourses = [
  { name: "Basics of Frontend", value: 33, maxValue: 100, color: "#FF9F43" },
  { name: "Go miles with GO lang", value: 20, maxValue: 100, color: "#54A0FF" },
  { name: "Backend ", value: 75, maxValue: 100, color: "#FF6B6B" },
];

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const data = new Date();

export const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navigation />
      <ExpandableChatBot />
      <div className="bg-slate-200 min-h-screen p-4">
        <div className="max-w-7xl mx-auto bg-slate-100 rounded-lg shadow-lg p-6">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-1/5 mb-6 lg:mb-0">
              {/* <div className="flex items-center mb-8">
              <Bot className="w-8 h-8 text-indigo-600 mr-2" />
              <h1 className="text-2xl font-bold text-indigo-600">Mentora</h1>
            </div> */}

              <div className="border ">
                <UserProfile />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-4/5 lg:pl-8">
              <header className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Dashboard</h2>
                  <p className="text-gray-500">
                    Information about your current plan and usages
                  </p>
                </div>
                <div className="flex items-center border p-2 rounded-xl">
                  <span className="mr-2">
                    {data.toLocaleDateString("en-GB", options)}
                  </span>
                  {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg> */}
                </div>
              </header>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-700">Projects</h3>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-700">
                    Resume Score
                  </h3>
                  <p className="text-2xl font-bold">76</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700">Users</h3>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-700">Progress</h3>
                  <p className="text-2xl font-bold">28/100 %</p>
                </div>
              </div>

              {/* API Calls Chart */}
              {/* <div className="bg-white p-4 rounded-lg shadow mb-8">
              <h3 className="text-lg font-semibold mb-4">API Calls in last 6 hours</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={apiData}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Line type="monotone" dataKey="calls" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
              </div> */}

              {/* P&L and Current Plan */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold mb-4">Top Skills</h3>
                    {/* <span className="text-sm text-gray-500">Total profit growth of 25%</span> */}
                    {/* <MoreHorizontal size={20} className="text-gray-400" /> */}
                  </div>
                  <ResponsiveContainer width="100%" height={190}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {pnlData.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full mr-2`}
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm">{item.name}</span>
                        {/* <span className="ml-auto font-semibold">{item.value}%</span> */}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Attended Courses</h3>
                    <MoreHorizontal size={20} className="text-gray-400" />
                  </div>
                  {/* <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="font-semibold">Team Plan</span>
              </div>
              <span className="text-xl font-bold">$99<span className="text-sm text-gray-500">/mo</span></span>
              </div> */}
                  <div className="space-y-4">
                    {attendedCourses.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.name}</span>
                          <span>
                            {item.value}/{item.maxValue}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${(item.value / item.maxValue) * 100}%`,
                              backgroundColor: item.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
                <div className="flex justify-between items-center mb-4">
                  <span>Team Plan</span>
                  <span className="font-bold">$99/mo</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                    <span className="ml-2">1/3</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="ml-2">1/5</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="ml-2">7.5k/10k</span>
                  </div>
                </div>
              </div> */}
              </div>
              <div className="">
                <hr className="my-10 border-slate-400" />
                <div className="border p-4 bg-white border-slate-300 rounded-xl shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Calendar</h3>
                    <MoreHorizontal size={20} className="text-gray-400" />
                  </div>
                  <div className=" w-fit my-4 mx-auto">
                    <MyCalendar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
