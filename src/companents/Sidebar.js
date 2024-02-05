import logo from "../img/logo_white.svg";
import ChatListItem from "./ChatListItem";
import styles from "../style/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
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
      <section>
        
      </section>
    </div>
  );
};

export default Sidebar;
