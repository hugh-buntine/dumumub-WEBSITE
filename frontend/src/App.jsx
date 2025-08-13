/**
 * DUMUMUB Main Application Component
 * 
 * Root component for the DUMUMUB audio plugin distribution platform.
 * Renders the main layout with plugin showcases and handles backend connectivity.
 * 
 * Author: Hugh Buntine
 */

import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Margin from './COMPONENTS/Margin/Margin';
import Banner from './COMPONENTS/Banner/Banner';
import Showcase from './COMPONENTS/Showcase/Showcase';
import BackgroundText from './COMPONENTS/BackgroundText/BackgroundText';

// API configuration with fallback for development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

function App() {
  const [backendTest, setBackendTest] = useState('');
  const [isBackendReady, setIsBackendReady] = useState(false);
  const [isWakingUp, setIsWakingUp] = useState(true);
  const [showReadyMessage, setShowReadyMessage] = useState(false);

  // Test backend connectivity and wake up sleeping service on component mount
  useEffect(() => {
    // Primary health check - wakes up Render service if sleeping
    const wakeUpBackend = async () => {
      try {
        console.log('🔄 Waking up backend service...');
        const response = await fetch(`${API_BASE_URL}/test`, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        const data = await response.text();
        setBackendTest(data);
        setIsBackendReady(true);
        setIsWakingUp(false);
        setShowReadyMessage(true);
        // Hide success message after 3 seconds
        setTimeout(() => setShowReadyMessage(false), 3000);
        console.log('✅ Backend is awake:', data);
      } catch (error) {
        console.warn('⚠️ Backend wake-up failed (likely still starting):', error.message);
        // Retry after a delay if initial wake-up fails
        setTimeout(async () => {
          try {
            const retryResponse = await fetch(`${API_BASE_URL}/test`);
            const retryData = await retryResponse.text();
            setBackendTest(retryData);
            setIsBackendReady(true);
            setIsWakingUp(false);
            setShowReadyMessage(true);
            // Hide success message after 3 seconds
            setTimeout(() => setShowReadyMessage(false), 3000);
            console.log('✅ Backend awake on retry:', retryData);
          } catch (retryError) {
            console.error('❌ Backend wake-up retry failed:', retryError);
            setIsWakingUp(false); // Stop loading even if failed
          }
        }, 3000);
      }
    };

    wakeUpBackend();
  }, []);

  // Log backend connection status for debugging
  console.log('Backend Status:', backendTest);

  /**
   * Plugin Configuration
   * Define metadata for each plugin showcase section
   */
  
  // DUMUMUB-0000003: Wavetable Synthesizer
  const plugin1 = {
    title: "DUMUMUB-0000003",
    info: "wavetable synthesizer plug-in",
    img: "/DUMUMUB-0000003_IMAGE.png",
    link: isBackendReady ? `${API_BASE_URL}/api/download/dumumub-0000003` : "",
    buttonText: isWakingUp ? "servers starting..." : "download"
  };

  // DUMUMUB-0000004: Frequency Manipulation Tool
  const plugin2 = {
    title: "DUMUMUB-0000004",
    info: "frequency manipulation plug-in",
    img: "/DUMUMUB-0000004_IMAGE.png",
    link: isBackendReady ? `${API_BASE_URL}/api/download/dumumub-0000004` : "",
    buttonText: isWakingUp ? "servers starting..." : "download"
  };

  // Placeholder for upcoming plugins
  const plugin3 = {
    title: "more soon...",
    info: "hopefully",
    img: "",
    link: "",
    buttonText: ""
  };

  return (
    <div>
      <div className={styles.container}>
        {/* Left sidebar with vertical DUMUMUB letters */}
        <div className={styles.margin}>
          <Margin />
        </div>
        
        {/* Main content area */}
        <div className={styles.page}>
          <BackgroundText />
          <div className={styles.blankTop}></div>
          
          {/* Backend status notification */}
          {isWakingUp && (
            <div className={styles.statusBanner}>
              <div className={styles.statusContent}>
                <div className={styles.spinner}></div>
                <div className={styles.statusText}>
                  <h3>Preparing Download Service</h3>
                  <p>Waking up servers for instant downloads... This takes just a moment.</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Success notification */}
          {showReadyMessage && (
            <div className={styles.successBanner}>
              <div className={styles.statusContent}>
                <div className={styles.checkmark}>✓</div>
                <div className={styles.statusText}>
                  <h3>Downloads Ready!</h3>
                  <p>All systems are now online. Click any plugin to download.</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Sticky navigation banner */}
          <Banner />
          
          {/* Plugin showcase sections with spacing */}
          <div className={styles.showcaseGap}></div>
          <Showcase 
            title={plugin1.title} 
            info={plugin1.info} 
            img={plugin1.img} 
            link={plugin1.link} 
            buttonText={plugin1.buttonText}
          />
          
          <div className={styles.showcaseGap}></div>
          <Showcase 
            title={plugin2.title} 
            info={plugin2.info} 
            img={plugin2.img} 
            link={plugin2.link} 
            buttonText={plugin2.buttonText}
          />
          
          <div className={styles.showcaseGap}></div>
          <Showcase 
            title={plugin3.title} 
            info={plugin3.info} 
            img={plugin3.img} 
            link={plugin3.link} 
            buttonText={plugin3.buttonText}
          />
          
          <div className={styles.showcaseGap}></div>
          
          {/* Footer */}
          <div className={styles.footer}>
            <p>© 2025 dumumub</p>
            <p>all rights reserved</p>
            <p>made with ❤️ by dumumub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
