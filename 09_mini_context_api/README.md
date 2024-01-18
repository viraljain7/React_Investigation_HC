# context/UserContext.js

```js
import React from "react";

export const UserContext = React.createContext();
```

# context/UserContextProvider.js

```js
import { useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <UserContext.Provider type={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
```

# component/Login.jsx

```js
// !important;
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const { setUser } = useContext(UserContext);
```

```js
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
    console.log(name, password);
  };

  return (
    <div className="container mx-auto m-2 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded shadow-md"
      >
        <h1 className="text-center text-2xl text-black font-extrabold mb-8">
          Login please{" "}
        </h1>
        <div className="m-4 ">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
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
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
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
```

# component/Profile.jsx

```js
// !important;
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const { user } = useContext(UserContext);
```

```js
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h1 className="bg-slate-500  w-[80vh] m-auto p-4">please login</h1>;
  } else {
    return (
      <h1 className="bg-slate-500  w-[80vh] m-auto p-4">welcome {user.name}</h1>
    );
  }
};
export default Profile;
```

# App.jsx

```js
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
```
