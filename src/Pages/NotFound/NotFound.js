import React from 'react';
import plane from '../../images/download.jpg'
const NotFound = () => {
    return (
        <div className='p-5 text-center text-danger'>
            <h1>BOOOOMMMM!!!!!</h1>
            <h3>Plane Crash!!!!!!</h3>
            <img style={{ width: '100%' }} src={plane} alt="" />
        </div>
    );
};

export default NotFound;