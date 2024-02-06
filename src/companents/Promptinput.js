import plusicon from "../icons/plus.svg";
import recordicon from "../icons/recording.svg";
import sendicon from "../icons/send.svg";
import styles from "../style/Promptinput.module.css";

const Promptinput = () => {
  return (
    <div className={styles.Input_group}>
      <div className={styles.prompt}>
        <button className={styles.btn}>
          <img src={plusicon} alt="more media" />
        </button>
        <input className={styles.input} type="text" placeholder="Type '/' for commands" />
        <button className={styles.btn}>
          <img src={recordicon} alt="record" />
        </button>
      </div>
      <button className={styles.btn} type="submit">
        <img src={sendicon} alt="send" />
      </button>
    </div>
  );
};

export default Promptinput;
