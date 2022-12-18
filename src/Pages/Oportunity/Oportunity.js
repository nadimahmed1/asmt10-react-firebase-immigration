import React from 'react';
import './Opportunity.css'

const Oportunity = () => {
    return (
        <div className='opportunity'>
            <h1 className='text-info '>Immigration Service From Expert Agent</h1>

            <h6>Aenean sed sapien venenatis, blandit nulla in, lacinia risus. Suspendisse potenti.</h6>

            <p>There are many variations of passages of psum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>

            <div>
                <ul className='text-danger'>
                    <li>95% success rates
                    </li>
                    <li>Free consultation</li>
                    <li>Easy & fast process</li>
                    <li>Expert immigration agents</li>
                    <li>Affordable fees</li>
                    <li>Over 30 years experience</li>
                </ul>
            </div>
        </div>
    );
};

export default Oportunity;