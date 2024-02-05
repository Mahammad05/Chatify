import styles from '../style/ChatListItem.module.css'
import icon from '../icons/chat.svg'

const ChatListItem = () => {

  return (
    <li className={styles.Listitem}>
      <img className={styles.img} src={icon} alt="" />
      <p>Lorem ipsum dolor sit amet consdghjt</p>
    </li>
  );
}

export default ChatListItem;
