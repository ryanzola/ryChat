import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm.jsx';

import './App.css';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">

      <ChatEngine 
        height="100vh"
        projectID="babc9827-1b6f-4014-8c91-e244c4770ea5"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={ () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
      />
    </div>
  );
}

export default App;
