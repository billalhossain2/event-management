import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import UserProfile from "../pages/UserProfile/UserProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EventBookingPage from "../pages/EventBookingPage/EventBookingPage";
import BlogPage from "../pages/Blog/Blogs";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/service-details/:id",
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/terms-and-conditions",
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path:"/user-profile",
                element:<UserProfile></UserProfile>
            },
            {
                path:"/event-booking",
                element:<PrivateRoute><EventBookingPage></EventBookingPage></PrivateRoute>
            },
            {
                path:"/blog",
                element:<PrivateRoute><BlogPage></BlogPage></PrivateRoute>
            },
        ]
    }
])

export default routes;