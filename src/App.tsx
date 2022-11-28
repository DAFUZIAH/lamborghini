import React from 'react';
import { useState } from 'react';
import './App.scss';
import Header from './components/header';
import Customize from './components/Customize';
import Meta from './components/Meta';

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <Header></Header>
      <Customize step={step} setStep={setStep} />

      <div className="section">
        <Meta></Meta>
        <div className="buying-section">
          <h2 className="price">
            350'000 CHF
          </h2>
          <div className="order-button">
            ORDER NOW
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
