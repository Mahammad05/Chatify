import closeicon from '../icons/Close.svg'
import newchaticon from '../icons/newchat.svg'
import styles from '../style/Topbar.module.css'

const Topbar = () => {
  return (
    <div className={styles.Topbar}>
      <figure className={styles.figure}>
        <img src={closeicon} alt="close the sidebar" />
      </figure>
      <figure className={styles.figure}>
        <img src={newchaticon} alt="create a new chat" />
        <figcaption>New chat</figcaption>
      </figure>
    </div>
  );
}

export default Topbar;
