import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-container">
            <div className="login-title">REGISTER</div>
            <form className="login-form" o>
                <input type="text" placeholder="Your Email" />

                <input type="password" placeholder="password" />

                <button>Register</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}


                <p>Already have an account? <Link to="/login">Please Login</Link> </p>
            </form>

        </div>
    );
};

export default Register;