/*import Sidebar from './components/adminUIComponents/Sidebar/Sidebar'
import Header from './components/adminUIComponents/Header/Header'*/
import Details from './views/Details/Details'
import Widgets from './views/Widgets/Widgets'
import NewMessage from './views/Email/NewMessage'
import Message from './views/Email/Message'
import Broadcast from './views/Broadcast/Broadcast'

export default props => (
  <div>
    <Details />
    <Widgets />
    <NewMessage />
    <Message />
    <Broadcast />
  </div>
)
