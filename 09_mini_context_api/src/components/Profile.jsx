import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);


    if (!user) {
        return <h1 className="bg-slate-500  w-[80vh] m-auto p-4">please login</h1>
    } else {
        return <h1 className="bg-slate-500  w-[80vh] m-auto p-4">welcome {user.name}</h1>
    }

}
export default Profile
