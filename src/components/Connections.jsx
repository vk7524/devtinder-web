import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../utils/constant"
import { useEffect } from "react"
import { addConnections } from "../slice/connectionSlice"

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((state) => state?.connection?.connections)

    const fetchConnections = async () => {
        try {
            const req = await axios.get(BASE_URL + "/user/connections", { withCredentials: true })
            dispatch(addConnections(req.data.data))
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchConnections();
    }, [])
    if (connections?.length == 0) {
        return <div className="h-[200px] flex justify-center items-center">No Connection Found.</div>
    }
    return (
        <>
            <div className="p-3">
                <h3 className="text-center font-bold text-4xl">Connections</h3>
                {connections?.map((item, index) => {
                    const { firstName, lastName, photoUrl, about, age, skills } = item;

                    return (
                        <div key={index} className="bg-base-300 p-3 rounded-2xl my-[5px] flex gap-3 w-1/2 mx-auto">
                            <img src={photoUrl} alt="test" className="w-20 h-20 rounded-[50px]" />
                            <div>
                                <div className="font-bold">{firstName + " " + lastName}</div>
                                <div>{about}</div>
                                <div>{age}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Connections