import Menu from './Menu'
import Chats from './Chats'
import '../style/sidebar.css'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <Menu />
      <Chats />
    </div>
  )
}

export default Sidebar