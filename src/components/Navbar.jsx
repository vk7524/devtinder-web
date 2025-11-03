import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import {removeUser} from "../slice/userSlice";
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userSlice.user);
    // console.log(user, "user");
    const handleLogout = async() =>{
        try{
            axios.post(BASE_URL + "/logout", {}, {withCredentials:true})
            dispatch(removeUser())
            navigate("/login")
        }catch(err){
            console.log(er);
            
        }
    }
    return (
        <>
            <div className="navbar bg-base-300 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">🙇‍♂️ DevTinder</a>
                </div>
                <div className="flex gap-2">
                    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                    {user && <div className="dropdown dropdown-end flex items-center">
                        <div>Welcome {user?.firstName}</div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-5">
                            
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}/>
                                    
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/">Feet</Link></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>}
                </div>
            </div>
        </>
    )
}
export default Navbar