import React, { useState, useEffect } from 'react';
import './App.css';
import divider from './images/pattern-divider-desktop.svg';
import dividerMobile from './images/pattern-divider-mobile.svg';
import dice from './images/icon-dice.svg';

const url = 'https://api.adviceslip.com/advice';

function App() {
  const [adviceSlip, setAdviceSlip] = useState({});

  const fetchAdvice = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAdviceSlip(data.slip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const { id, advice } = adviceSlip;

  return (
    <div className="App">
      <article className="article">
        <h4>ADVICE #{id}</h4>
        <h1>"{advice}"</h1>
        <img src={divider} alt="" className="divider-desktop" />
        <img src={dividerMobile} alt="" className="divider-mobile" />
      </article>
      <button onClick={() => fetchAdvice()}>
        <img src={dice} alt="" />
      </button>
    </div>
  );
}

export default App;
