// iframe version

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

// DirectLine version - unlimited customization with botframework-webchat, but is slow, has connection issue, and questionable security
import React, { useMemo } from 'react';
import './App.css';
import auburn_logo from './assets/auburn.png';
import typingAnimation from './assets/typing-ani.gif';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

//Here's where the chatbot and the component of the website live
function App() {
  
  const directLine = createDirectLine({
    //Secret Line can be access in the Channel 
    secret: '3REIzIiTo3ne8lwGSiIoIuaYQ3ob4xeWreg0h7i6wv3t9ogmYiTaJQQJ99BBACGhslBAArohAAABAZBS284i.wkRXZiK1wYmcn2jFLUjQAJtXYI5L564qc4MWJ5ESDnDIEKmXM7HsJQQJ99BDACHYHv6AArohAAABAZBS3jKZ',
  });

  //Generate userID (can be used for login page to store credential and allow history chat)
  const userID = 'user_' + Math.random().toString(36).substring(7);

  const styleOptions = {
    //overall chatbot styling
    accent: '#66ccff',
    subtle: '#d9d9d9',
    botAvatarInitials: 'ESOL',
    userAvatarInitials: 'You',
    backgroundColor: '#242424',
    enableUploadThumbnail: true,
    uploadMultiple: true,
    //bubble for AI styling
    bubbleBackground: '#262626',
    bubbleBorderColor: '#595959',
    bubbleTextColor: 'white',
    botAvatarBackgroundColor: '#ff8a65',
    bubbleBorderRadius: 10,
    //bubble for user styling
    bubbleFromUserBackground: '#262626',
    bubbleFromUserTextColor: 'white',
    bubbleFromUserBorderColor: '#595959',
    bubbleFromUserBorderRadius: 10,
    userAvatarBackgroundColor: '#646cff',
    //send box styling
    sendBoxBackground: '#242424',
    hideUploadButton: false,
    sendBoxTextWrap: true,
    sendBoxButtonColor: '#646cff', 
    sendBoxTextColor: 'white',
    sendBoxButtonShadeColorOnHover: '#404040',
    //typing animation styling
    typingAnimationBackgroundImage: `url(${typingAnimation})`,
    typingAnimationHeight: 75,
    typingAnimationWidth: 100,
  };

  return (
    <div className="app-wrapper">
      <div className="header">
        <img src={auburn_logo} alt="Logo Image" className="logo-img" />
        <p className="logo">ESOL AI Chatbot</p>
      </div>
      <div className="iframe-container">
        <div className="chatbox">
          <ReactWebChat
            directLine={directLine}
            userID={userID}
            styleOptions={styleOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default App;




