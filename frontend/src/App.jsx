import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Margin from './COMPONENTS/Margin/Margin';
import Banner from './COMPONENTS/Banner/Banner';
import Showcase from './COMPONENTS/Showcase/Showcase';
import BackgroundText from './COMPONENTS/BackgroundText/BackgroundText';

function App() {
  const [backendTest, setBackendTest] = useState('');

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:5001/test')
      .then((response) => response.text()) 
      .then((data) => setBackendTest(data)) 
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(backendTest);

  // SHOWCASE STUFF
  const title1 = "DUMUMUB-0000003";
  const info1 = "wavetable synthesizer plug-in";
  const img1 = "../public/DUMUMUB-0000003_IMAGE.png";
  const link1 = "http://localhost:5001/api/download/dumumub-0000003";
  const buttonText1 = "download";

  const title2 = "more soon...";
  const info2 = "hopefully";
  const img2 = "";
  const link2 = "";
  const buttonText2 = "";

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
        </div>
        
     </div>
    </div>
    
  );
}

export default App;
