import axios from "axios";
import { useSelector } from "react-redux"
import { BASE_URL } from "../utils/constant";
const UserCards = ({feed}) => {
    
    return (
        <>
            {feed?.map((item, index) => {
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
            })}
        </>
    )
}
export default UserCards