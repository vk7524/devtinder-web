import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"
import UserCards from "./UserCards"
const Profile = () => {
    const { user } = useSelector((state) => state?.userSlice)
    const feed = useSelector((state) => state?.feed?.feed);

    return (
        <div className="grid justify-items-center">
            <EditProfile user={user} />
            <UserCards feed={feed}/>
        </div>
    )
}

export default Profile