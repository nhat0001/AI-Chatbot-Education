/**
 * Option 1:
 * iframe version - fast, work out of the box, simple to understand
 * deprecated and fallback purposes only - always use Option 2 if no issues
*/

// import './App.css';
// import auburn_logo from './assets/auburn.png';

// function App() {
//   return (
//     <div className="app-wrapper">
//       <div className="header">
//         <img src={auburn_logo} alt="Logo Image" className="logo-img" />
//         <p className="logo">ESOL AI Chatbot</p>
//       </div>
//       <div className="iframe-container">
//         <iframe
//           src="https://copilotstudio.microsoft.com/environments/Default-ccb6deed-bd29-4b38-8979-d72780f62d3b/bots/cr0ae_alabamaEsolTeachingAssistant/webchat?__version__=2" 
//           className="chatbox"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;


/** Option 2:
 * DirectLine version - unlimited customization and can be extended with new features
 * Connect using the secret/token key from Web channel security
 */
import { useMemo } from 'react';
import './App.css';
import auburn_logo from './assets/auburn.png';
import Chatbot from './Chatbot';

/**
 * Main App component
 * Render the logo + title, and the chatbot itself
 * Future extension: login page and chat history using userID and conversationID
 */
function App() {
  //Token key can be acquire from (Agent) Settings -> Security -> Web channel security  
  // Token key should be update in .env only (create your own .env)
  const secret = import.meta.env.VITE_DIRECT_LINE_SECRET;

  //Randomly generate userID (future extension)
  const userID = useMemo(() => 'user_' + Math.random(), []);

  //HTML render, CSS file is in App.css
  return (
    <div className="app-wrapper">
      <div className="header">
        <img src={auburn_logo} alt="Logo Image" className="logo-img" />
        <p className="logo">ESOL AI Chatbot</p>
      </div>
      <div className="iframe-container">
        <Chatbot secret={secret} userID={userID} />
      </div>
    </div>
  );
}

export default App;