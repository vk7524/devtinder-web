import { useState } from "react"
import { userSlice } from "../slice/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const EditProfile = ({ user }) => {
    if(!user){
        return <div>Loading....</div>
    }
    const { firstName, lastName, photoUrl, about, age, gender } = user;
    const [firstNameField, setFirstNameField] = useState(firstName);
    const [lastNameField, setLastNameField] = useState(lastName);
    const [photoUrlField, setPhotoUrlField] = useState(photoUrl);
    const [ageField, setAgeField] = useState(age);
    const [genderField, setGenderField] = useState(gender);
    const [aboutField, setAboutField] = useState(about);
    const handleEditProfile = async() => {
    try {
        const payload = {
            firstName: firstNameField,
            lastName: lastNameField,
            photoUrl: photoUrlField,
            age: ageField,
            gender: genderField,
            about: aboutField
        }
        await axios.patch(BASE_URL + "/profile/edit", payload, { withCredentials: true })
    } catch (err) {
        console.log(err)
    }
}
return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <div className="fieldset-legend">Edit Profile</div>

        <label className="label">First Name</label>
        <input type="text" value={firstNameField} onChange={(e) => setFirstNameField(e.target.value)} className="input" placeholder="Enter First Name" />

        <label className="label">Last Name</label>
        <input type="text" value={lastNameField} onChange={(e) => setLastNameField(e.target.value)} className="input" placeholder="enter Last Name" />

        <label className="label">Photo Url</label>
        <input type="text" value={photoUrlField} onChange={(e) => setPhotoUrlField(e.target.value)} className="input" placeholder="Enter Url" />

        <label className="label">Age</label>
        <input type="text" value={ageField} onChange={(e) => setAgeField(e.target.value)} className="input" placeholder="Enter Age" />

        <label className="label">Gender</label>
        <input type="text" value={genderField} onChange={(e) => setGenderField(e.target.value)} className="input" placeholder="Enter Gender" />

        <label className="label">About</label>
       <textarea
        value={aboutField}
        onChange={(e) => setAboutField(e.target.value)}
        className="textarea"
        placeholder="Write something about yourself"
      />

        <button className="btn btn-neutral mt-4" onClick={handleEditProfile}>Save Profile</button>
    </fieldset>
    // <div>dwedewdew</div>
)
}

export default EditProfile 