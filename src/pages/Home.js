import Sidebar from '../companents/Sidebar'
import Frame from '../companents/Frame'
import styles from '../style/Home.module.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Sidebar />
      <Frame />
    </div>
  )
}

export default Home