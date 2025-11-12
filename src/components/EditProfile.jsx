import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { userSlice } from "../slice/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import UserCards from "./UserCards";
import { addUser } from "../slice/userSlice";

const EditProfile = ({ user }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const [showTost, setShowTost] = useState(false)
    const [firstNameField, setFirstNameField] = useState("");
    const [lastNameField, setLastNameField] = useState("");
    const [photoUrlField, setPhotoUrlField] = useState("");
    const [ageField, setAgeField] = useState("");
    const [genderField, setGenderField] = useState("");
    const [aboutField, setAboutField] = useState("");
    useEffect(() =>{
        if(user){
            setFirstNameField(user.firstName || "");
            setLastNameField(user.lastName || "");
            setPhotoUrlField(user.photoUrl || "");
            setAgeField(user.age || "");
            setGenderField(user.gender || "");
            setAboutField(user.about || "");
        }
    }, [user])
    const handleEditProfile = async () => {
        setError("")
        try {
            const payload = {
                firstName: firstNameField,
                lastName: lastNameField,
                photoUrl: photoUrlField,
                age: ageField,
                gender: genderField,
                about: aboutField
            }
            const res = await axios.patch(BASE_URL + "/profile/edit", payload, { withCredentials: true });
            dispatch(addUser(res?.data?.data))
            setShowTost(true);
            setTimeout(() => setShowTost(false), 2000);
        } catch (err) {
            console.log(err)
            setError(err?.response?.data)
        }
    }
    if (!user) {
        return <div>Loading....</div>
    }
    return (
        <>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                {showTost && <div className="toast toast-top toast-start">
                    <div className="alert alert-success">
                        <span>Data saved successfully.</span>
                    </div>
                </div>}
                <div className="fieldset-legend">Edit Profile</div>

                <label className="label">First Name</label>
                <input type="text" value={firstNameField} onChange={(e) => setFirstNameField(e.target.value)} className="input" placeholder="Enter First Name" />

                <label className="label">Last Name</label>
                <input type="text" value={lastNameField} onChange={(e) => setLastNameField(e.target.value)} className="input" placeholder="enter Last Name" />

                <label className="label">Photo Url</label>
                <input type="text" value={photoUrlField} onChange={(e) => setPhotoUrlField(e.target.value)} className="input" placeholder="Enter Url" />

                <label className="label">Age</label>
                <input type="text" value={ageField} onChange={(e) => setAgeField(e.target.value)} className="input" placeholder="Enter Age" />

                
                {/* <input type="text" value={genderField} onChange={(e) => setGenderField(e.target.value)} className="input" placeholder="Enter Gender" /> */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Gender</legend>
                    <select value={genderField || ""} onChange={(e) => setGenderField(e.target.value)} className="select">
                        <option value="">Pick a gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    <span className="label">Optional</span>
                </fieldset>
                <label className="label">About</label>
                <textarea
                    value={aboutField}
                    onChange={(e) => setAboutField(e.target.value)}
                    className="textarea"
                    placeholder="Write something about yourself"
                />
                <div className="text-red-500">{error}</div>
                <button className="btn btn-neutral mt-4" onClick={handleEditProfile}>Save Profile</button>
            </fieldset>
            <UserCards user={{
                firstName: firstNameField,
                lastName: lastNameField,
                photoUrl: photoUrlField,
                about: aboutField,
                age: ageField,
                gender: genderField,
            }} />
        </>
        // <div>dwedewdew</div>
    )
}

export default EditProfile 