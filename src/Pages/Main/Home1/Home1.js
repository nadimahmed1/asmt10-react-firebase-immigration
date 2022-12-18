import React from 'react';
import Categories from '../../Categories/Categories';
import Oportunity from '../../Oportunity/Oportunity';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home1.css'

const Home1 = () => {
    return (
        <div className='home1'>
            <Banner></Banner>
            <br />
            <Services></Services>
            <br />
            <Oportunity></Oportunity>
            <br />
            <Categories></Categories>
        </div>
    );
};

export default Home1;