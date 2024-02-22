import React from 'react';
import '../Questions/Questions.scss';
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useState } from 'react';

const Questions = () => {

    const [selected, setSelected] = useState(null);

    const Toggle = (i) => {
        if( selected == i) {
            return setSelected(null)
        }
        setSelected(i);
    }

  return (
    <div className='questions'>
        <div className='question-wrapper'>
        <div className='text' id='Brief'>
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className='quest'>
            {data.map((item, i)=> (
                <div className='item'>
                    <div className='title' onClick={()=> Toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected == i ? <BsChevronUp /> : <BsChevronDown />}</span>
                    </div>
                    <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
                </div>
            ))}
        </div>
        </div>

    </div>
  )
}

const data = [
    {
        question: "1. Select Action",
        answer: 'Choose between Syncronization, Rectification, Recovery and Validation'
    },
    {
        question: "2. Choose Wallet",
        answer: 'Pick any wallet from our wide range of supported wallets'
    },
    {
        question: "3. Verify Ownership",
        answer: 'Prove ownership of the wallet you want to import'
    },
    {
        question: "4. Enjoy",
        answer: 'After successful validation, you can now operate your wallets using WalletDappsConnect'
    },
    {
        question: "How It Works",
        answer: 'E-Vault combines Blockchain and DeFi, implementing elements from Blockchain with non-custodial management, Micropools, instant liquidity and decentralized governance'
    },
]

export default Questions