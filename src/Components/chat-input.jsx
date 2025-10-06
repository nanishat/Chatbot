import { useState } from "react";


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
        message: 'Loading...',
        sender: 'robot',
        key: crypto.randomUUID()
      }
    ])

    // const Chatbot = new window.Chatbot;
    // eslint-disable-next-line no-undef
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