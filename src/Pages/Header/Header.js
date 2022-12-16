import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to={'home'}>Home</Link>
            <Link to={'services'}>Services</Link>
            <Link to={'about'}>About</Link>
            <Link to={'login'}>Login</Link>
        </div>
    );
};

export default Header;