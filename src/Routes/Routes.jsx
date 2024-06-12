import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas/Biodatas";
import About from "../pages/About/About";
import Contact from "../pages/ContactUs/Contact";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import UserDashboard from "../Layout/UserDashboard/UserDashboard";
import EditBiodatas from "../pages/UserDashboard/Biodatas/EditBiodatas";
import ViewBiodatas from "../pages/UserDashboard/Biodatas/ViewBiodatas";
import AdminDashboard from "../pages/UserDashboard/admin/AdminDashboard";
import AllUsers from "../pages/UserDashboard/admin/AllUsers";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/biodatas',
            element:<Biodatas></Biodatas>
        },
        {
            path: '/about-us',
            element: <About></About>
        },
        {
            path: '/contact-us',
            element: <Contact></Contact>
        },
        {
            path: '/sign-in',
            element: <SignIn></SignIn>
        },
        {
            path: '/sign-up',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: '/UserDashboard',
      element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
      children: [
        // user routes
        {
          path: 'edit-biodata',
          element: <EditBiodatas></EditBiodatas>
        },
        {
          path: 'view-biodata',
          element: <ViewBiodatas></ViewBiodatas>
        },
        // admin routes
        {
          path: 'admin-dashboard',
          element: <AdminDashboard></AdminDashboard>
        }
        ,
        {
          path: 'all-users',
          element: <AllUsers></AllUsers>
        }

      ]
    }
  ]);