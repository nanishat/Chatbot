import { useState } from "react";


function ChatInput({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = useState('');

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

    // const Chatbot = new window.Chatbot;
    // eslint-disable-next-line no-undef
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        key: crypto.randomUUID()
      }
    ])

    setInputText('');
  }

  return (
    <>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={sendMessage}
      >Send</button>
    </>
  );
}

export default ChatInput;