import Topbar from "./Topbar";
import Chatbox from "./Chatbox";
import Promptinput from "./Promptinput";
import styles from "../style/Conversation.module.css";

const Conversation = () => {
  return (
    <div className={styles.Conversation}>
      <Topbar />
      <Chatbox />
      <Promptinput />
    </div>
  );
};

export default Conversation;
