import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About"
import Login from "./Login"
import Navbar from "./Navbar"
import Profile from "./Profile"
import Example from "./Examples";
import Archive from "./Archive";
import FAQs from "./FAQs";
import Logout from "./Log out";
import "./app.css"


const routes = [
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/example",
    element: <Example/>,
  },
  {
    path: "/FAQs",
    element: <FAQs/>,
  },
  {
    path: "/archieve",
    element: <Archive/>,
  },
  {
    path: "/logout",
    element: <Logout/>,
  }
];

const router = createBrowserRouter(routes)
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;