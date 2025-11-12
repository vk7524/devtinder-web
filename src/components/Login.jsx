import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showPassowrd, setShowPassword] = useState(true);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            if (isLoginForm) {
                const payload = { emailId, password }
                const res = await axios.post(BASE_URL + "/login", payload, { withCredentials: true })
                dispatch(addUser(res.data.user))
                navigate("/")
                setError(res)
            }else{
                const payload = {firstName, lastName, emailId, password}
                const res = await axios.post(`${BASE_URL}/signup`, payload, {withCredentials:true})
                dispatch(addUser(res.data.user));
                navigate("/profile")
                // console.log(res, "signup res");
            }

        } catch (err) {
            setError(err?.response?.data || "Something went wrong!")
            console.log(err)
        }
    }
    return (
        <>
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4 mx-auto my-[20px]">
                <div className="fieldset-legend">{isLoginForm ? "Login" : "Sign Up"}</div>

                {!isLoginForm ? <>
                    <label className="label">First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="First Name" />

                    <label className="label">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="Last Name" /></> : ""}

                <label className="label">Email</label>
                <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input" placeholder="Email" />

                <label className="label">Password</label>
                <div className="relative">
                    <button className="absolute z-10 right-3 top-2 cursor-pointer" onClick={() => setShowPassword(!showPassowrd)}>{!showPassowrd ? "Hide" : "Show"}</button>
                    <input type={!showPassowrd ? "Test" : "Password"} value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" />
                </div>
                <p className="text-red-500">{error}</p>
                <button onClick={handleLogin} className="btn btn-neutral mt-4">{isLoginForm ? "Login" : "Sign Up"}</button>
                <p className="cursor-pointer text-center underline" onClick={() => setIsLoginForm(!isLoginForm)}>{isLoginForm ? "New User? Sign Up Here" : "Existing User? Login Here"}</p>
            </fieldset>
        </>
    )
}

export default Login