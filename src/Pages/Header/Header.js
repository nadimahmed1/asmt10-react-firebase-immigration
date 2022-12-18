import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <div className='header text-center fixed-top'>
            <Link to={'home'}>Home</Link>
            <Link to={'services'}>Services</Link>
            <Link to={'about'}>About</Link>
            <Link to={'blogs'}>Blogs</Link>
            {
                user ?
                    <button onClick={() => signOut(auth)}>LogOut</button>
                    :
                    <Link to={'login'}>Login</Link>}
        </div>
    );
};

export default Header;