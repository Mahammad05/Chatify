import Promt from './Promt'
import TextBox from './TextBox'
import '../style/conversation.css'


const Conversation = () => {
  return (
    <div className='Conversation'>
        <TextBox />
        <Promt />
    </div>
  )
}

export default Conversation