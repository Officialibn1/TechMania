import '../components/styles/LoginSignup.css'
import { BsCart4 } from "react-icons/bs";

const Login = () => {
    return (
        <div className='loginContainer'>
            <div className="login">
                <div className="loginLogo">
                    <span>
                        <BsCart4 />
                    </span>
                    <h2>TechMania</h2>
                </div>

                <div className="loginText">
                    <h1>Login</h1>
                </div>
                <form action="" method="post" className="loginForm">
                    {/* email input and label */}
                    <label htmlFor="loginEmail">Email:</label>
                    <input type="email" name="loginEmail" id="loginEmail" placeholder='Enter Your Email' />
                    
                    {/* password input and label */}
                    <label htmlFor="loginPassword">Password:</label>
                    <input type="password" name="loginPassword" id="loginPassword" placeholder='**************' />

                    {/* submit button */}
                    <button type="submit" className="submit" id="submit">
                        Login
                    </button>
                </form>

                {/* forgot passowrd link */}
                <div className="forgotPassword">
                    <a href="#">forgot password?</a>
                </div>

                {/* redirect to create account link */}
                <div className="createAccount">
                    <span>Don&apos;t have an account? <a href="#">Signup</a></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
