import styles from './App.module.css';
import React from 'react';
import { Slider } from './components/Slider/Slider';
import data from './data.json';

function App() {
  return (
    <div className={styles.App}>
      <h1>Slider Automático</h1>
      <Slider imagens={data.images} />
    </div>
  );
}

export default App;
