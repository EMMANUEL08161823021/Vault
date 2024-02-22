import React from 'react'
import '../Works/Works.scss';
import Advert from '../Advert/Advert';
import Market from '../Assets/Trading-Broker-Trading-1536x844.webp';

const Works = () => {
  return (
    <div className='works'>
        <div className='workTexts' id='Works'>
            <h1>The right time to start trading is now</h1>
            <p>Every digital artwork on Upside is authentic and truly unique. Blockchain technology makes this new aproach to digital ownership possible.</p>
        </div>
        <div className='image'>
          <img src={Market}/>
        </div>
        <Advert/>
    </div>
  )
}

export default Works