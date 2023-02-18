import React from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='footer_card flex_regular'>
                    <div className='footer_card_wrapper'>
                        <p>Get started with HealthQ</p>
                        <Link className='btn btn_quaternary'>GET STARTED</Link>
                    </div>
                </div>
                <div className='footer_main flex_wrap_between'>
                    <div>
                        <figure></figure>
                        <p>Copyright © 2023 HealthQ, Inc.</p>
                        <p>All rights reserved.</p>
                    </div>
                    <ul>
                        <li className='list_heading'>LEGAL</li>
                        <li>Terms of Services</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul>
                        <li className='list_heading'>SUPPORT</li>
                        <li>Help Center</li>
                        <li>Mail to us</li>
                    </ul>
                    <ul>
                        <li className='list_heading'>GENERAL</li>
                        <li>Career</li>
                        <li>Doctor's Login</li>
                        <li>User Login</li>
                        <li className='flex_regular'><span>Instagram</span><i className='gg-instagram'></i></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
