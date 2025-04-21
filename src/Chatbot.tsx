/** Chatbot.tsx */
import { useMemo } from 'react';
import { createDirectLine } from 'botframework-webchat';
import typingAnimation from './assets/typing-ani.gif';
import ReactWebChat from 'botframework-webchat';

/**
 * Main components of the Copilot Chatbot
 * param: secret, userID
 */
const Chatbot = ({ secret, userID }: {secret: string; userID: string}) => {
  const directLine = useMemo(() => createDirectLine({ secret }), [secret]);

  // styleOptions to style the chatbot. See https://github.com/microsoft/BotFramework-WebChat/blob/main/packages/api/src/StyleOptions.ts
  // Additional styling can be done in App.css

  const styleOptions = {
    // overall chatbot styling
    accent: '#66ccff',
    subtle: '#d9d9d9',
    botAvatarInitials: 'ESOL',
    userAvatarInitials: 'You',
    backgroundColor: '#242424',
    enableUploadThumbnail: true,
    uploadMultiple: true,
    autoScrollSnapOnActivity: true,
    // bubble for AI styling
    bubbleBackground: '#262626',
    bubbleBorderColor: '#595959',
    bubbleTextColor: 'white',
    botAvatarBackgroundColor: '#ff8a65',
    bubbleBorderRadius: 10,
    // bubble for user styling
    bubbleFromUserBackground: '#262626',
    bubbleFromUserTextColor: 'white',
    bubbleFromUserBorderColor: '#595959',
    bubbleFromUserBorderRadius: 10,
    userAvatarBackgroundColor: '#646cff',
    // send box styling
    sendBoxBackground: '#242424',
    hideUploadButton: false,
    sendBoxTextWrap: true,
    sendBoxButtonColor: '#646cff',
    sendBoxTextColor: 'white',
    sendBoxButtonShadeColorOnHover: '#404040',
    sendBoxButtonShadeColorOnActive: '#595959',
    // typing animation styling
    typingAnimationBackgroundImage: `url(${typingAnimation})`,
    typingAnimationHeight: 75,
    typingAnimationWidth: 100,
    // suggested action (grading) styling
    paddingWide: 20,
    suggestedActionBorderRadius: 20,
    suggestedActionBackgroundColor: '#262626',
    suggestedActionBackgroundColorOnHover: '#1a1a1a',
    suggestedActionBackgroundColorOnActive: '#595959'
  };

  return (
    <div className="chatbox">
      {/* Render the Chatbot using ReactWebChat */}
      <ReactWebChat
        directLine={directLine}
        userID={userID}
        styleOptions={styleOptions}
      />
    </div>
  );
};

export default Chatbot;
