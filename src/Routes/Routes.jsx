import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails/ServiceDetails";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/service-details/:id",
                element:<ServiceDetails></ServiceDetails>
            }
        ]
    }
])

export default routes;