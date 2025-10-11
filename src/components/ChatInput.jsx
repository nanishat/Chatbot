import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import loadingImg from '../assets/loading-spinner.gif';
import './ChatInput.css';


function ChatInput({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  async function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        key: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages)

    if (isLoading || inputText === '') {
      return;
    }

    setIsLoading(true);

    setInputText('');

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={loadingImg} className="loading-spinner" />,
        sender: 'robot',
        key: crypto.randomUUID()
      }
    ])

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        key: crypto.randomUUID()
      }
    ])
    setIsLoading(false);
  }

  return (
    <div
      className="chat-input-container"
    >
      <input
        placeholder="Send a message to Chatbot"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}

export default ChatInput;