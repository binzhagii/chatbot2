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
        botId: '1d60dbe8-3e79-4e0d-a1a9-5c52aa93c167', // Use your actual bot ID
        clientId: '1d60dbe8-3e79-4e0d-a1a9-5c52aa93c167',  // Add your client ID here
        hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
        messagingUrl: 'https://messaging.botpress.cloud',
        botName: 'UB Assistant',
        showPoweredBy: false,
        showCloseButton: true
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
