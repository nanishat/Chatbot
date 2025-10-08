import { useState } from "react";
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user',
    key: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    key: 'id2'
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    key: 'id3'
  }, {
    message: 'Today is October 1',
    sender: 'robot',
    key: 'id4'
  }])

  return (
    <div
      className="app-container"
    >
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
