import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { removeFeed } from "../slice/feedSlice";
const UserCards = ({ user }) => {
    const dispatch = useDispatch();
    const {firstName, lastName, photoUrl, about, age, gender, _id} = user;
    const handelFeed = async (status, toUserId) =>{
        try{
            const req = await axios.post(`${BASE_URL}/request/send/${status}/${toUserId}`,{},{withCredentials:true})
            dispatch(removeFeed(toUserId)) 
            // console.log(req, "feed user");
            
        }catch(err){
            console.log(err, "err");
            
        }
    }
    return (
        <>
            <div className="card bg-base-300 shadow-sm w-80 p-5">
                <figure>
                    <img
                        src={photoUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    {age && gender ? <p>{age + "," + gender}</p> : ""}
                    <p>{about}</p>
                    <div className="card-actions justify-center gap-[30px]">
                        <button onClick={() => handelFeed("ignored", _id)} className="btn btn-primary">Igonre</button>
                        <button onClick={() => handelFeed("interested", _id)} className="btn btn-secondary">Interested</button>
                    </div>
                </div>
            </div>
            {/* {user?.map((item, index) => {
                return (
                    <div className="card bg-base-300 shadow-sm w-80 p-5" key={index}>
                        <figure>
                            <img
                                src={item?.photoUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item?.firstName + " " + item?.lastName}</h2>
                            {item?.age && item?.gender ? <p>{item?.age + "," + item?.gender}</p> : ""}
                            <p>{item?.about}</p>
                            <div className="card-actions justify-center gap-[30px]">
                                <button className="btn btn-primary">Igonre</button>
                                <button className="btn btn-secondary">Interested</button>
                            </div>
                        </div>
                    </div>
                )
            })} */}
        </>
    )
}
export default UserCards