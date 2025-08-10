import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import PostJop from "./Components/PostJop/PostJop";
import SingleJop from "./Components/SingleJop/SingleJop";
import { JobsProvider } from './context/JopContext';
import AllJobs from "./Components/jobs/AllJobs";


function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Contact", element: <Contact /> },
        { path: "AllJobs", element: <AllJobs /> },
        { path: "PostJob", element: <PostJop /> },
        { path: "SingleJop/:id", element: <SingleJop /> },
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "*", element: <NotFound /> }, // Catch-all route
      ],
    },
  ]);
  return (
    <>
      <JobsProvider>
      <RouterProvider router={routers} />
      </JobsProvider>
    </>
  );
}

export default App;
