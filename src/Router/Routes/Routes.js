import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import AddService from "../../pages/AddService/AddService";
import AllServices from "../../pages/AllServices/AllServices";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ServicesDetails from "../../pages/ServicesDetails/ServicesDetails";
import MyReviews from '../../pages/MyReviews/MyReviews';
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/allservices',
        loader:() => fetch('https://travel-up-server-dipta-sarker.vercel.app/allservices'),
        element:<AllServices></AllServices>},
        {path:'/servicesDetails/:id',
        loader:({params}) => fetch(`https://travel-up-server-dipta-sarker.vercel.app/servicesDetails/${params.id}`),
        element:<ServicesDetails></ServicesDetails>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/addService',element:<PrivateRouter><AddService></AddService></PrivateRouter>},
        {path:'/myReviews', element:<PrivateRouter><MyReviews></MyReviews></PrivateRouter>}
    ]},
    {path:'*', element:<h1 className="text-center text-4xl font-bold text-red-700">Error 404 !! No Route Match </h1>}
])