import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Margin from './COMPONENTS/Margin/Margin';
import Banner from './COMPONENTS/Banner/Banner';
import Showcase from './COMPONENTS/Showcase/Showcase';
import BackgroundText from './COMPONENTS/BackgroundText/BackgroundText';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

function App() {
  const [backendTest, setBackendTest] = useState('');

  useEffect(() => {
    // Fetch data from the backend API
    fetch(`${API_BASE_URL}/test`)
      .then((response) => response.text()) 
      .then((data) => setBackendTest(data)) 
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(backendTest);

  // SHOWCASE STUFF
  const title1 = "DUMUMUB-0000003";
  const info1 = "wavetable synthesizer plug-in";
  const img1 = "/DUMUMUB-0000003_IMAGE.png";
  const link1 = `${API_BASE_URL}/api/download/dumumub-0000003`;
  const buttonText1 = "download";

  const title2 = "DUMUMUB-0000004";
  const info2 = "frequency manipulation plug-in";
  const img2 = "/DUMUMUB-0000004_IMAGE.png";
  const link2 = `${API_BASE_URL}/api/download/dumumub-0000004`;
  const buttonText2 = "download";

  const title3 = "more soon...";
  const info3 = "hopefully";
  const img3 = "";
  const link3 = "";
  const buttonText3 = "";

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.margin}>
          <Margin />
        </div>
        <div className={styles.page}>
          <BackgroundText />
          <div className={styles.blankTop}></div>
          <Banner/>
          <div className={styles.showcaseGap}></div>
          <Showcase title={title1} info={info1} img={img1} link={link1} buttonText={buttonText1}/>
          <div className={styles.showcaseGap}></div>
          <Showcase title={title2} info={info2} img={img2} link={link2} buttonText={buttonText2}/>
          <div className={styles.showcaseGap}></div>
          <Showcase title={title3} info={info3} img={img3} link={link3} buttonText={buttonText3}/>
          <div className={styles.showcaseGap}></div>
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
