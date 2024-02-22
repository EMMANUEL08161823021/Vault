import React from 'react';
import '../Earning/Earning.scss';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Card from '../Assets/Trading-Broker-Rewards-650x422.webp';

const Earning = () => {
  return (
    <motion.div className='earning-wrapper'>
        <motion.div className='earning'>
        <motion.div className='earnImage'
        initial={{opacity: 0.5, scale: 0.5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 2, delay: 1}}
        >
          <img src={Card}/>
        </motion.div>
        <motion.div className='earnText'
        initial={{x:100}}
        whileInView={{x: 0}}
        transition={{duration: 2, delay: 1}}
        >
          <h1>Earn weekly rewards as you Secure Your Assets</h1>
          <p>These tools allow you to access and utilize open-source features to improve the performance and safety of your transactions.</p>
          <Link to="/coins"><button>Explore</button></Link>
        </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default Earning