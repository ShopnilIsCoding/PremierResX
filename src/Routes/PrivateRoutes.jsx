import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading)
    {
        return <Skeleton count={15} />
    }
    if(user)
    return children;
    return (
        <Navigate state={location.pathname} to={'/login'}>
            
        </Navigate>
    );
};

export default PrivateRoutes;