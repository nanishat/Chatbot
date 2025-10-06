function ChatInput({ chatMessages, setChatMessages }) {

  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: 'test',
        sender: 'user',
        key: crypto.randomUUID()
      }
    ])
  }

  return (
    <>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
      />
      <button
        onClick={sendMessage}
      >Send</button>
    </>
  );
}

export default ChatInput;