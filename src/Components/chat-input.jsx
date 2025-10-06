import { useState } from "react";

function ChatInput({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        key: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages)
  }

  return (
    <>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button
        onClick={sendMessage}
      >Send</button>
    </>
  );
}

export default ChatInput;