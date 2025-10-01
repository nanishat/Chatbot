import ChatInput from './Components/chat-input.jsx';
import ChatMessage from './Components/chat-message.jsx';

function App() {
  return (
    <>
      <ChatInput />
      <ChatMessage
        message="hello chatbot"
        sender="user"
      />
      <ChatMessage
        message="Hello! How can I help you?"
        sender="robot"
      />
      <ChatMessage
        message="can you get me todays date?"
        sender="user"
      />
      <ChatMessage
        message="Today is October 1"
        sender="robot"
      />
      <ChatMessage
        message="can you get me todays date?"
        sender="user"
      />
      <ChatMessage
        message="Today is October 1"
        sender="robot"
      />
    </>
  )
}

export default App
