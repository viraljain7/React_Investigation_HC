# install

```Javascript
react-router-dom
```

# import this wherever we use navlink and link

```Javascript
import { NavLink, Link } from 'react-router-dom';
```

# Main.jsx

```javascript
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { X, Y, Z } from "component/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="us/contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="github/:username" element={<Github />} />
      <Route
        // Loader={}//padna hai
        path="github"
        element={<GithubId />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

# App.jsx

```Javascript

// App.js

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (

    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  );
}

export default App;

```

# fetch Value Dynamically

## import this line in main.jsx

```js
<Route path="Github/:username" element={<Github />} />
```

## github.jsx file

```js
import { useParams } from "react-router-dom";

const Github = () => {
  const { username } = useParams();
  return <div>github: {username}</div>;
};

export default Github;
```

## GithubId.jsx ~~learn Loader~~

```js
import { useEffect, useState } from "react";

const GithubId = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/viraljain7")
      .then((res) => res.json())
      .then((followers) => {
        console.log(followers);
        setData(followers);
      });
  }, []);

  return (
    <div className="w-[80vw]  m-auto h-[70vh]  bg-slate-400">
      <h1 className="text-center text-white text-3xl pt-2">
        Github Follower : {data.followers}
      </h1>
      <div className="flex justify-evenly items-center">
        <img
          src={data.avatar_url}
          alt=""
          className="w-[300px] h-[300px]  rounded-full"
        />
        <div className="text-center text-white text-3xl pt-2">
          Bio : {data.bio}
        </div>
      </div>
    </div>
  );
};

export default GithubId;
```
