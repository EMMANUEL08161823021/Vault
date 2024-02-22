import React, {useState, useEffect} from 'react';
import Coin from '../Coin/Coin';
import { IoIosCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import '../Coins/Coins.scss';
import axios from 'axios';

const Coins = () => {

  const [coin, setCoin] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`;
  useEffect(()=>{
    axios.get(url).then((response)=> {
      setCoin(response.data)
      console.log(response.data[0])
    }).catch((error)=>{
      console.log(error);
    })

  },[])
  return (
    <div className='coins'>
      <Coin coin={coin}/>
      <div className='notification'>
        <div className='n-wrapper'>
          <p>Join now and get 24/7 <span>Security Notification</span></p>
          <div className='link'>
            <div className='detail'>
              <IoIosCall />
              <span> +1 555 87 89 56</span>
            </div>
          <div className='detail'>
            <TfiEmail />
            <a href=''>support@e-vault.buzz</a>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Coins