import Chats from './Chats'
import logo from '../img/logo_white.svg'
import '../style/sidebar.css'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <figure>
        <img src={logo} alt="logo" />
        <figcaption>Chatify</figcaption>
      </figure>
      <Chats />
    </div>
  )
}

export default Sidebar