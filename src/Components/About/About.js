import React from 'react';
import '../About/About.scss';
import Earning from '../Earning/Earning';
import {motion} from 'framer-motion';
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaUmbrella, FaWallet } from "react-icons/fa";
const About = () => {
  return (
    <div className='about'>
        <div className='about-wrapper'>
            <div className='title' id='About'>
                <h1>The most trusted insurance platform</h1>
                <p>With adequate experience of over 12 years, we have mastered the skills of offering the best solutions with the latest technologies.</p>
            </div>
            <motion.div className='terms'>
                <motion.div className='secure'
                initial={{opacity: 0.5, scale: 0.5}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, scale: 1}}
                >
                    <span><RiSecurePaymentFill className='icon'/></span>
                    <h2>Secure Storage</h2>
                    <p>End-to-end encryption using client-side generated keys keeps all user activity private.</p>
                </motion.div>
                <motion.div className='secure'
                initial={{opacity: 0.5, scale: 0.5}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, scale: 1}}
                >
                    <span><FaUmbrella className='icon'/></span>
                    <h2>Insurance</h2>
                    <p>Private keys never leave mobile wallets, keeping user funds safe</p>
                </motion.div>
                <motion.div className='secure'
                initial={{opacity: 0.5, scale: 0.5}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, scale: 1}}
  
                >
                    <span><FaWallet className='icon'/></span>
                    <h2>30+ Wallets Supported</h2>
                    <p>Users can select from our wide range of supported crypto wallets. No need to install any extension or app.</p>
                </motion.div>
            </motion.div>
        </div>
        <Earning/>

    </div>
  )
}

export default About