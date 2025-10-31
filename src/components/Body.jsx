import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constant";
import {addUser} from "../slice/userSlice"
import { useEffect } from "react"


const Body = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const userData = useSelector((state) => state?.userSlice?.user);
    console.log(userData, "userData");
    
    const fetchUser = async () => {
       try{
        const res = await axios.get(BASE_URL + "/profile/view", {withCredentials:true})
        dispatch(addUser(res.data))
       } catch(err){
        console.log(err, "error");
        if(err.response?.status === 401){
            navigate("/login")
        }
       }
    }
    useEffect(() => {
        if(!userData){
            fetchUser()
        }
    },[])
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
export default Body