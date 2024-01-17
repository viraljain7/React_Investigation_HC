import { useParams } from "react-router-dom"

const Github = () => {
    const { username } = useParams()
    return (
        <div className="text-3xl text-white text-underlined text-center">
            Github:  {username}
        </div>
    )
}

export default Github
