import React, { useState } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'

export default function ExpandableChatBot() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isBot: true },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const handleInputChange = (e) => {
    setInputMessage(e.target.value)
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isBot: false }])
      setInputMessage("")
      // Simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: "I'm processing your request. How else can I help you?", isBot: true }])
      }, 1000)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-10">
      {!isExpanded ? (
        <button
          onClick={toggleExpand}
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors duration-200"
        >
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 max-h-96 flex flex-col">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat Bot</h3>
            <button onClick={toggleExpand} className="text-white hover:text-gray-200">
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-500 text-white'
                } p-2 rounded-lg max-w-[80%] ${message.isBot ? 'self-start' : 'self-end ml-auto'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="border-t p-4 flex">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-200"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}