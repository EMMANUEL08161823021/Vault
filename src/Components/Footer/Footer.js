import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from '../Assets/Vault-Logo-2.webp';

import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>

        <div className='socialMedia'>
            <p>© 2022 e-vault.buzz . All Rights Reserved.</p>
            <div className='media'>
                <a href='#'><FaInstagram /></a>
                <a href='#'><FaTwitter /></a>
                <a href='#'><FaFacebook /></a>
                <a href='#'><FaLinkedin /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer