import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home1.css'

const Home1 = () => {
    return (
        <div className='home1'>
            <Banner></Banner>
            <br />
            <Services></Services>
        </div>
    );
};

export default Home1;