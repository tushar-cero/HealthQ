import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container flex_space_between'>
                <div className='header_options'>
                    <figure className='logo background_image_contain'></figure>
                    <Link to='/'>Features</Link>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Contact Us</Link>
                </div>
                <div className='header_button_container'>
                    <Link to='/' className='header_button btn_secondary'>Doctor's Login</Link>
                    <Link to='/' className='header_button btn_primary'>User Login</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
