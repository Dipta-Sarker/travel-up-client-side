import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import AllServices from "../../pages/AllServices/AllServices";
import Home from "../../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/allservices',
        loader:() => fetch('http://localhost:5000/allservices'),
        element:<AllServices></AllServices>}
    ]}
])