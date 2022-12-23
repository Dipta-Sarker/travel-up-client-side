import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { contexApi } from '../../AuthContex/AuthContex';

const PrivateRouter = (props) => {
    const page = props.children
    
    let location = useLocation();
    const {user,loadding} = useContext(contexApi)
    if(loadding){
        return <progress className="progress progress-primary w-56" value="100" max="100"></progress>
    }
    if(user){
        return page;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
        
};

export default PrivateRouter;