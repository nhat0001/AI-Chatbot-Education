import './App.css';
import auburn_logo from './assets/auburn.png';

function App() {
  return (
    <div className="app-wrapper">
      <div className="header">
        <img src={auburn_logo} alt="Logo Image" className="logo-img" />
        <p className="logo">ESOL AI Chatbot</p>
      </div>
      <div className="iframe-container">
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-ccb6deed-bd29-4b38-8979-d72780f62d3b/bots/cr0ae_alabamaEsolTeachingAssistant/webchat?__version__=2" 
          className="chatbox"
          title="ESOL AI Chatbot" 
        />
      </div>
    </div>
  );
}

export default App;
