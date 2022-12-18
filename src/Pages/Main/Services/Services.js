import React from 'react';
import dubai from '../../../images/dubai-skyline-downtown-skyscrapers-sunset-modern-architecture-concept-with-highrise-buildings-world-famous-metropolis-united-arab-emirates.jpg';
import dhaka from '../../../images/25835573_dhaka_line.jpg';
import usa from '../../../images/statue-liberty-new-york-city-skyline-usa.jpg';
import Service from './Service/Service';
import './Services.css'



const Services = () => {
    const services = [
        { id: 1, city: 'Dubai', img: dubai, description: 'Dubai is very nice city in the world.. some people has come to dubai' },
        { id: 2, city: 'Dhaka', img: dhaka, description: 'Dhaka is very nice city in the world.. some people has come to dhaka' },
        { id: 3, city: 'NewYork', img: usa, description: 'NewYork is very nice city in the world.. some people has come to NewYork' },
    ]
    return (
        <div className='services-container'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }

        </div>
    );
};

export default Services;