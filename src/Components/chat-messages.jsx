import ChatMessage from "./chat-message";

function ChatMessages({ chatMessages }) {
  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.key}
          />
        );
      })}
    </>
  );
}

export default ChatMessages;