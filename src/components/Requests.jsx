import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useEffect } from "react"
import { addRequest, removeRequest} from "../slice/requestSlice"
import { useDispatch, useSelector } from "react-redux"

const Requests = () => {
    const dispatch = useDispatch()
    const request = useSelector((state) => state?.requestSlice?.request)

    const fetchRequest = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/user/requests/received`, { withCredentials: true })
            dispatch(addRequest(res.data.data))
        } catch (err) {
            console.log(err, "err");
        }
    }
    useEffect(() => {
        fetchRequest();
    }, [])

    const handleRequest = async (status, requestId) => {
        try{
            const res = await axios.post(`${BASE_URL}/request/review/${status}/${requestId}`,{}, {withCredentials:true})
            dispatch(removeRequest(requestId));
            // console.log(res, "test");
        } catch(err){
            console.log(err, "error");
            
        }
    }
    if (request?.length == 0) {
        return <div className="h-[200px] flex justify-center items-center">No Request Found.</div>
    }
    return (
        <div className="p-3">
            <h3 className="text-center font-bold text-3xl">Connections Requests</h3>
            {request?.map((item, index) => {
                const { _id, firstName, lastName, photoUrl, about, age, skills } = item?.fromUserId;
                return (
                    <div key={_id} className="bg-base-300 p-3 rounded-2xl flex items-center justify-between gap-3 w-1/2 mx-auto mt-[10px]">
                        <div className="flex gap-4 items-center">
                            <img src={photoUrl} alt="test" className="w-20 h-20 rounded-[50px]" />
                            <div>
                                <div className="font-bold">{firstName + " " + lastName}</div>
                                <div>{about}</div>
                                <div>{age}</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="btn btn-primary" onClick={() => handleRequest("rejected", item._id)}>Reject</button>
                            <button className="btn btn-secondary" onClick={() => handleRequest("accepted", item._id)}>Accept</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Requests