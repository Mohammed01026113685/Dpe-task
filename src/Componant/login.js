import { Link } from 'react-router-dom';
import './login .css'
function Login() {
    return (  
        <>
        <div className="Contenar">
            <div className='box'>
            <b>Hello Again!</b>
            <p>Welcome Back You’ve Been Missed!</p>
            <div className='text-box'>
                <h6>To login enter Your email address and password</h6>
                <label>Email Address</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
            <Link to="/home" > <button>Log in</button> </Link>
            </div>
            </div>
        </div>
        </>
    );
}

export default Login;