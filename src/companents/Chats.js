import ChatListItem from '../companents/ChatListItem'
import logo from '../img/logo_white.svg'
import styles from '../style/Chats.module.css'

const Chats = () => {
  return (
    <div className={styles.Chats}>
      <figure className={styles.figure}>
        <img className={styles.img} src={logo} alt="company-logo" />
        <figcaption className={styles.figcaption}>Chatify</figcaption>
      </figure>
      <input className={styles.input} type="text" placeholder="Search chats" />
      <section className={styles.chats}>
        <ul className={styles.ul}>
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
        </ul>
      </section>
    </div>
  );
}

export default Chats;
