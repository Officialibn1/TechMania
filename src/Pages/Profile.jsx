import '../components/styles/Profile.css'
import { BsFillPersonFill } from "react-icons/bs";

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profileTitle">
                <h1>Your Profile</h1>
            </div>

            <div className="cartBorder"></div>

            <div className="profileDetails">
                <span className="profileAvatar">
                    <BsFillPersonFill />
                </span>

                <div className="profileDetailsText">

                </div>
            </div>
        </div>
    );
}

export default Profile;
