import '../components/styles/Profile.css'
import { BsFillPersonFill } from "react-icons/bs";

const Profile = () => {
    return (
        <div className='profilePage'>
            {/* Profile title banner */}
            <div className="aboutBanner">
                <span>Your Profile</span>
            </div>


            {/* Profile Avatar and Details */}
            <div className="profileDetails">
                {/* Profile Avatar */}
                <span className="profileAvatar">
                    <BsFillPersonFill />
                </span>

                {/* Profile Details */}
                <div className="profileDetailsText">
                    <h3>Isah Ibn Muhammad</h3>
                    <span>+234 9832 973 7283</span> <br />
                    <span>No. 323, San Francisco, United State</span>
                </div>
            </div>

            {/* Barline that seperates the profile details from profile editting section */}
            <div className="profileBorder"></div>

            <div className="profileEditSection">
                <form action="" method="post" className="profileEdit" id="profileEdit">
                    {/* Edit Name Container */}
                    <div className="formInputsContainer">
                        <label htmlFor="editName" className="editName">Edit Name:</label>
                        <input type="text" name="editName" id="editName" className="editName" />
                    </div>

                    {/* Edit Email Container */}
                    <div className="formInputsContainer">
                        <label htmlFor="editEmail" className="editEmail">Edit Email:</label>
                        <input type='email' name="editEmail" id="editEmail" className="editEmail" />
                    </div>

                    {/* Edit Phone Number Container */}
                    <div className="formInputsContainer">
                        <label htmlFor="editNumber" className="editNumber">Phone No.:</label>
                        <input type="number" name="editNumber" id="editNumber" className="editNumber" />
                    </div>

                    {/* Edit Password Container */}
                    <div className="formInputsContainer">
                        <label htmlFor="changePassword" className="changePassword">Change Password:</label>
                        <input type="password" name="changePassword" id="changePassword" className="changePassword" />
                    </div>

                    {/* City Container */}
                    <div className="formInputsContainer">
                        <label htmlFor="editCity" className="editCity">City:</label>
                        <input type="text" name="editCity" id="editCity" className="editCity" />
                    </div>

                    {/* State / Province Container */}
                    <div className="formInputsContainer">
                        <label htmlFor="stateProvince" className="stateProvince">State / Province:</label>
                        <input type="text" name="stateProvince" id="stateProvince" className="stateProvince" />
                    </div>

                    {/* Country Container */}
                    <div className="formInputsContainer">
                        <label htmlFor="editCountry" className="editCountry">Country:</label>
                        <input type="text" name="editCountry" id="editCountry" className="editCountry" />
                    </div>

                    {/* Postal Code Container */}
                    <div className="formInputsContainer">
                        <label htmlFor="editPostalCode" className="editPostalCode">Postal Code:</label>
                        <input type="number" name="editPostalCode" id="editPostalCode" className="editPostalCode" />
                    </div>

                    <div className="formInputsContainer">
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default Profile;
