import React from 'react';
import '../Advert/Advert.scss';
import Invitae from '../Assets/Trading-Broker-Everything-3-300x82.webp';
import Person from '../Assets/Trading-Broker-Everything-1.webp';
import Lady from '../Assets/Trading-Broker-Everything-4.webp';
import Gemini from '../Assets/Trading-Broker-Everything-2.webp';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Advert = () => {
  return (
    <motion.div className='advert'>
        <motion.div className='advertPicture'>
          <motion.div className='pictureOne'>
            <motion.img src={Person} initial={{scale: 1.1}} whileInView={{scale:1}} transition={{duration:2, delay:1}}/>
            <motion.div className='invitae' initial={{x: 50}} whileInView={{x: 0}} transition={{duration:1, delay:1}}><img src={Invitae}/></motion.div>
          </motion.div>
          <motion.div className='pictureTwo'>
            <motion.div className='lady' initial={{scale: 1.1}} whileInView={{scale:1}} transition={{duration:2, delay:1}}><img src={Lady}/></motion.div>
            <motion.img src={Gemini} initial={{x: -50}} whileInView={{x: 0}} transition={{duration:1, delay:1}}/>
          </motion.div>
        </motion.div>
        <h1>Certified Blockchain One Fix for all Crypto Related Transactions Committed to Excellence</h1>
        <Link to="/coins">
          <button>Explore</button>
        </Link>
    </motion.div>
  )
}

export default Advert