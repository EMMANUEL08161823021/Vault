import React from 'react';
// import {Route, Routes} from 'react-router-dom';
import Coins from './Components/Coins/Coins';
import Hero from './Components/Hero/Hero';
import Works from './Components/Works/Works';
import About from './Components/About/About';
import Questions from './Components/Questions/Questions';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';



function App() {

  return (
    <>
      <Coins/>
      {/* <Header/> */}
      <Hero/>
      <Works/>
      <About/>
      <Questions/>
      <Explore/>
      <Footer/>
    </>

  )
}

export default App;
