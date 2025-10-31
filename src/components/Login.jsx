import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("vivek@gmail.com");
    const [password, setPassword] = useState("Vivek@123");

    const handleLogin = async () => {
        try {
            const payload = { emailId, password }
            const res = await axios.post(BASE_URL + "/login", payload,{ withCredentials: true })
                dispatch(addUser(res.data.user))
                navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4 mx-auto my-[20px]">
                <div className="fieldset-legend">Login</div>
                <label className="label">Email</label>
                <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" />

                <button onClick={handleLogin} className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </>
    )
}

export default Login