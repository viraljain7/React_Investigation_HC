import { useEffect, useState } from "react"

const GithubId = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        fetch("https://api.github.com/users/viraljain7")
            .then(res => res.json())
            .then(followers => {
                console.log(followers);
                setData(followers)
            })
    }, [])


    return (
        <div className="w-[80vw]  m-auto h-[70vh]  bg-slate-400">
            <h1 className="text-center text-white text-3xl pt-2">Github Follower : {data.followers}</h1>
            <div className="flex justify-evenly items-center">
                <img src={data.avatar_url} alt="" className="w-[300px] h-[300px]  rounded-full" />
                <div className="text-center text-white text-3xl pt-2">
                    Bio : {data.bio}
                </div>
            </div>
        </div>
    )
}

export default GithubId
