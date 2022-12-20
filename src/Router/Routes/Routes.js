import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import AllServices from "../../pages/AllServices/AllServices";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ServicesDetails from "../../pages/ServicesDetails/ServicesDetails";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/allservices',
        loader:() => fetch('http://localhost:5000/allservices'),
        element:<AllServices></AllServices>},
        {path:'/servicesDetails/:id',
        loader:({params}) => fetch(`http://localhost:5000/servicesDetails/${params.id}`),
        element:<ServicesDetails></ServicesDetails>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>}
    ]}
])