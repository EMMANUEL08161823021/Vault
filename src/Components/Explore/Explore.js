import React from 'react';
import '../Explore/Explore.scss';
import Logo from '../Assets/Vault-Logo-2.webp';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='explore'>
      <div className='explore-wrapper'>
        <h1>Explore the world of <span>Cyber Security</span></h1>
        <p>By incorporating these tools into your wallet, you can benefit from enhanced functionality and increased security measures.</p>
        <div>
          <Link to="/coins">
          <button>Get Started</button>
          </Link>
        </div>
      </div>
      <div className='footContainer'>
            <div className='vault'>
                <img src={Logo}/>
                <p>Instant access to Blockchain, anytime and anywhere</p>
            </div>
            <div className='policy'>
                <div className='company'>
                    <h2>Company</h2>
                    <h4><a href='#'>About</a></h4>
                    <h4><a href='#'>Team</a></h4>
                    <h4><a href='#'>Contact</a></h4>

                </div>
                <div className='company'>
                    <h2>Product</h2>
                    <h4><a href='#'>Service</a></h4>
                    <h4><a href='#'>Pricing</a></h4>
                </div>
                <div className='company'>
                    <h2>Legal</h2>
                    <h4><a href='#'>Terms & Condition</a></h4>
                    <h4><a href='#'>Privacy Policy</a></h4>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Explore