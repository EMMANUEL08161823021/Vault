import React from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { motion }from 'framer-motion'

import '../Coin/Coin.scss';

const Coin = (props) => {

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-60%",
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 20,
        delay:  1
      }
    },
  }
  return (
    <motion.div className='coin-heading'>
      <motion.div className='container' variants={sliderVariants} initial="initial" animate="animate" >
        {props.coin.map(coin => (
          <motion.div className='item' >
            <div className='image'><img src={coin.image} alt=''/></div>
            <div className='coin-detail'>
              <a href='https://www.coingecko.com/en/coins/coin.id`'><p>{coin.id}</p></a>
              <p>({coin.symbol.toUpperCase()})</p>
            </div>
            <p className='price'>${coin.current_price.toLocaleString()}</p>
            <p className='rate'>({coin.price_change_percentage_24h.toFixed(2)}%)</p>
            <span><RiArrowDownSFill /></span>
          </motion.div>

        ))}
        <p className='power'>Powered by <span>Coingecko</span></p>
      </motion.div>
      

    </motion.div>
  )
}

export default Coin