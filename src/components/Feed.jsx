import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { addFeed } from "../slice/feedSlice";
import UserCards from "./UserCards";
const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((state) => state?.feed?.feed);
    // console.log(feed, "feed");
    
    const getFeed = async () =>{
        // if(feed) return
        try{
            const res = await axios.get(BASE_URL + "/feed", {withCredentials: true})
            dispatch( addFeed(res?.data))
            // console.log(res, "res");
        }catch(err){
           console.log(err);
        }
    }
    useEffect(() =>{
        getFeed();
    },[])
    return feed && (
        <div className="grid grid-cols-1 gap-5 justify-items-center mt-5">
            <UserCards feed={feed}/>
        </div>
    )
}
export default Feed