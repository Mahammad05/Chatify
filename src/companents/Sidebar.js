import Chats from "./Chats";
import Features from "./Features";
import styles from "../style/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Chats />
      <Features />
    </div>
  );
};

export default Sidebar;
