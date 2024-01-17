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
import { X, Y, Z } from "index/component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="us/contact" element={<Contact />} />
      <Route path="about" element={<About />} />
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
