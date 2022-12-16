import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" o>
                <input type="text" placeholder="Your Email" />

                <input type="password" placeholder="password" />

                <button>Login</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}


                <p>Don't have an account? <Link to="/register">Register first</Link> </p>
            </form>

        </div>
    );
};

export default Login;