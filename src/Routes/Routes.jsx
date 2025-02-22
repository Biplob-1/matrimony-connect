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
import AdminRoute from "./AdminRoute";
import AddBiodatas from "../pages/UserDashboard/Biodatas/AddBiodatas";
import BiodataDetail from "../pages/Biodatas/Biodatas/BiodataDetail";
import FavouriteBiodatas from "../pages/UserDashboard/Biodatas/FavouriteBiodatas";
import Checkout from "../pages/Checkout/Checkout";
import ContactRequest from "../pages/UserDashboard/ContactRequest";
import AllContactReq from "../pages/UserDashboard/admin/AllContactReq";


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
          path: '/biodata-detail/:id',
          element:<PrivateRoute><BiodataDetail></BiodataDetail></PrivateRoute>,
          // element:<BiodataDetail></BiodataDetail>,
          loader: ({params}) => fetch(`https://shaadi-server-eta.vercel.app/allBiodatas/${params.id}`),
        },
        
        {
          path: '/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          // element:<BiodataDetail></BiodataDetail>,
          loader: ({params}) => fetch(`https://shaadi-server-eta.vercel.app/allBiodatas/${params.id}`),
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
        {
          path: 'contact-request',
          element: <ContactRequest></ContactRequest>
        },
        {
          path: 'add-biodata',
          element: <AddBiodatas></AddBiodatas>
        },
        {
          path: 'favourites-biodatas',
          element: <FavouriteBiodatas></FavouriteBiodatas>
        },
        // admin routes 
        {
          path: 'admin-dashboard',
          element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
        },
        {
          path: 'all-req',
          element: <AdminRoute><AllContactReq></AllContactReq></AdminRoute>
        },
        {
          path: 'all-users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },


      ]
    }
  ]);