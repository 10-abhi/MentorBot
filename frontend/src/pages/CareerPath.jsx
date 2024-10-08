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

export const CareerPath = () => {
  return (
    <>
      <Navigation />  
      <ExpandableChatBot />
    <div className="bg-purple-50 min-h-screen p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
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
                <h2 className="text-2xl font-bold">Career Path</h2>
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
            
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default CareerPath;
