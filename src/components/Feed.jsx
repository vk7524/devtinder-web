import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { addFeed } from "../slice/feedSlice";
import UserCards from "./UserCards";
const Feed = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.feed?.feed?.[0]);
    
    
    const getFeed = async () =>{
        // if(feed) return
        try{
            const res = await axios.get(BASE_URL + "/feed", {withCredentials: true})
            dispatch( addFeed(res?.data))
        }catch(err){
           console.log(err);
        }
    }
    useEffect(() =>{
        getFeed();
    },[])

    if(!user) return;

    if(user.length <= 0){
        // console.log(user.length, "user.length ");
        <div className="flex justify-center my-10 text-white">No More Feed Avaiable.</div>
    }
    return user && (
        <div className="grid grid-cols-1 gap-5 justify-items-center mt-5">
            <UserCards user={user}/>
        </div>
    )
}
export default Feed