import trahsicon from '../icons/trash-bin 1.svg'
import lightmodeicon from '../icons/light.svg'
import upgradeicon from '../icons/upgrade.svg'
import updateicon from '../icons/update.svg'
import logouticon from '../icons/log_out.svg'
import userpp from '../img/User.png'
import styles from '../style/Features.module.css'

const Features = () => {
  return (
    <div className={styles.Features}>
        <div className={styles.feature}>
            <img src={trahsicon} alt="trash icon" />
            <p>Clear all conversations</p>
        </div>
        <div className={styles.feature}>
            <img src={lightmodeicon} alt="light mode icon" />
            <p>Switch Light Mode</p>
        </div>
        <div className={styles.feature}>
            <img src={upgradeicon} alt="upgrade icon" />
            <p>Upgrade to Chatify Pro</p>
        </div>
        <div className={styles.feature}>
            <img src={updateicon} alt="update icon" />
            <p>Uptades & FAQ</p>
        </div>
        <div className={styles.feature}>
            <img src={logouticon} alt="log out icon" />
            <p>Log out</p>
        </div>
        <div className={styles.feature}>
            <img className={styles.userpp} src={userpp} alt="user profile" />
            <figcaption>Antoine Piedanna</figcaption>
        </div>
    </div>
  );
}

export default Features;
