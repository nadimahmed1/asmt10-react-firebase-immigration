import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './CheckOut.css'

const CheckOut = () => {

    return (
        <div>
            <h1>Welcome to Adventure Awaits</h1>
            <div className="checkout-container">
                <div className="checkout-title">Please Provide Your Info</div>
                <form className="checkout-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Email" />

                    <input type="text" placeholder="Phone " />

                    <button>Submit</button>

                </form>
                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default CheckOut;