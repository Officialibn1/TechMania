import '../components/styles/LoginSignup.css'
import { BsCart4 } from "react-icons/bs";

const Signup = () => {
    return (
        <div className="loginSignupConatainer">
            <div className="login">
                <div className="loginLogo">
                    <span>
                        <BsCart4 />
                    </span>
                    <h2>TechMania</h2>
                </div>

                <div className="loginText">
                    <h1>Signup</h1>
                </div>
                <form action="" method="post" className="loginForm">
                    {/* Full Name input and label */}
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" name="fullName" id="fullName" placeholder='' />
                    
                    {/* email input and label */}
                    <label htmlFor="loginEmail">Email:</label>
                    <input type="email" name="loginEmail" id="loginEmail" placeholder='' />
                    
                    {/* password input and label */}
                    <label htmlFor="loginPassword">Password:</label>
                    <input type="password" name="loginPassword" id="loginPassword" placeholder='' />
                    
                    {/* confirm Password input and label */}
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder='' />

                    {/* submit button */}
                    <button type="submit" className="submit" id="submit">
                        Signup
                    </button>
                </form>

                {/* redirect to create account link */}
                <div className="createAccount">
                    <span>Have an account? <a href="#">Login</a></span>
                </div>
            </div>
        </div>
    );
}

export default Signup;
