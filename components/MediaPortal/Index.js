/*import Sidebar from './components/adminUIComponents/Sidebar/Sidebar'
import Header from './components/adminUIComponents/Header/Header'*/
import Widgets from './views/Widgets/Widgets'
import NewMessage from './views/Email/NewMessage'
import Message from './views/Email/Message'
import Broadcast from './views/Broadcast/Broadcast'

export default props => (
  <div>
    <Widgets />
    <NewMessage />
    <Message />
    <Broadcast />
  </div>
)
