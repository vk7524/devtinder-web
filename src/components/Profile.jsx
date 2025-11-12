import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"
import UserCards from "./UserCards"
const Profile = () => {
    const { user } = useSelector((state) => state?.userSlice)

    return (
        <div className="grid grid-cols-2 justify-items-center p-3">
            <EditProfile user={user} />
        </div>
    )
}

export default Profile