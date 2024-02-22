import React from 'react';
import '../Hero/Hero.scss';
import Header from '../Header/Header';
import Umbrella from '../Assets/Trading-Broker-logo-1-300x62.webp';
import Uturn from '../Assets/Trading-Broker-logo-2-300x66.webp';
import SiteMark from '../Assets/Trading-Broker-logo-3-300x63.webp';
import NextMove from '../Assets/Trading-Broker-logo-5-300x43.webp';
import Recharge from '../Assets/Trading-Broker-logo-4.webp';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <motion.div className='hero'>
        <Header/>
        <motion.div className='heroText' 
        initial={{opacity: 0, scale: 0.5, y: 200}}
        animate={{opacity: 1, scale: 1, y:0}}
        transition={{duration: 1, delay:1,}}
        >
            <h1>Instant access to Blockchain, <span>anytime and anywhere</span></h1>
            <p>We help decentralized protocol for syncing various Wallets issues on Secure Server. This is not an app but a protocol that establishes a remote resolution between all noncustodial wallet</p>
            <Link to="/coins">
                <button>Explore</button>
            </Link>
            <div className='rate'>
                <div className='view'>
                    <h1>2M</h1>
                    <p>Active Users</p>
                </div>
                {/* <hr className='vertical'></hr> */}
                <div className='view'>
                    <h1>0%</h1>
                    <p>Comission Fee</p>
                </div>
            </div>
        </motion.div>
        <div className='heroTwo'>
            <p>Trusted by dynamic companies around the world</p>
            <div className='logos'>
                <div className='split'>
                    <div className='logo-image'><img src={Umbrella}/></div>
                    <div className='logo-image'><img src={Uturn}/></div>
                </div>
                <div className='split'>
                    <div className='logo-image'><img src={SiteMark}/></div>
                    <div className='logo-image'><img src={Recharge}/></div>
                </div>

                <div className='logo-image'><img src={NextMove}/></div>                  
                
                
                
            </div>
        </div>
    </motion.div>
  )
}

export default Hero