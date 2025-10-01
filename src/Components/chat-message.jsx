import userImg from '../assets/user.png';
import robotImg from '../assets/robot.png';

function ChatMessage({ message, sender }) {
  return (
    <div>
      {sender === 'robot' && (
        <img src={robotImg} width="50" alt="robot" />
      )}

      {message}

      {sender === 'user' && (
        <img src={userImg} width="50" alt="user" />
      )}
    </div>
  );
}

export default ChatMessage;