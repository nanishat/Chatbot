import ChatMessage from "./chat-message";

function ChatMessages() {
  const chatMessages = [{
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
  }];

  return (
    chatMessages.map((chatMessage) => {
      return (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.key}
        />
      );
    })
  );
}

export default ChatMessages;