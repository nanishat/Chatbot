import ChatInput from './Components/chat-input.jsx';
import ChatMessages from './Components/chat-messages.jsx';
import { useState } from "react";

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
    <>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages
        chatMessages={chatMessages}
      />
    </>
  )
}

export default App
