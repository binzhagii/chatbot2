import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '1d60dbe8-3e79-4e0d-a1a9-5c52aa93c167',
        clientId: '1d60dbe8-3e79-4e0d-a1a9-5c52aa93c167',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
        messagingUrl: 'https://messaging.botpress.cloud',
        botName: 'UB Assistant',
        botAvatarUrl: 'https://cdn-icons-png.flaticon.com/512/4712/4712107.png', // Example custom avatar
        backgroundImage: '', // You can add a URL for a background image inside the chat
        stylesheet: '',
        showPoweredBy: false,
        showCloseButton: true,
        enableTranscriptDownload: false,
        layoutWidth: '400px',
        layoutHeight: '500px',
        containerWidth: '100%',
        hideWidget: false,
        enableReset: true,
        enableConversationDeletion: true,
        themeName: 'prism',
        theme: {
          primaryColor: '#004aad',
          backgroundColor: '#ffffff',
          textColorOnBackground: '#000000',
          buttonColor: '#004aad',
          buttonTextColor: '#ffffff',
          botMessageBackground: '#f1f1f1',
          botMessageTextColor: '#333333',
          userMessageBackground: '#004aad',
          userMessageTextColor: '#ffffff',
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;
