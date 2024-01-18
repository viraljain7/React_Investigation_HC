import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ name, password })
        console.log(name, password)

    };

    return (
        <div className="container mx-auto m-2 ">


            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">

                <h1 className="text-center text-2xl text-black font-extrabold mb-8">Login please </h1>
                <div className="m-4 ">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="m-4 ">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="text-center m-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
