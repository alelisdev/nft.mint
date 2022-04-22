import Home from './containers/home';
import 'react-notifications/lib/notifications.css'
import {NotificationContainer} from 'react-notifications'

function App() {
  return (
    <div className="main">
      <NotificationContainer />
      <Home />
    </div>
  );
}

export default App;
