import '../style/chats.css'
import chat from '../icons/chat.svg'

const Chats = () => {
  return (
    <div className="Chats">
        <div className="chat-box">
          <img id='chat' src={chat} alt='chat-icon' />
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="chat-box">
          <img id='chat' src={chat} alt='chat-icon' />
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="chat-box">
          <img id='chat' src={chat} alt='chat-icon' />
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="chat-box">
          <img id='chat' src={chat} alt='chat-icon' />
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="chat-box">
          <img id='chat' src={chat} alt='chat-icon' />
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <button id='new-chat'> + New Chat</button>
    </div>
  )
}

export default Chats