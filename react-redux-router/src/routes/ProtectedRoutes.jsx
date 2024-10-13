import React from 'react';
import {useLocation ,Navigate} from "react-router-dom"


export default function RequireAuth({ children }) {
    // const { authed } = useAuth();
    const checkAuth = () =>{
        const isAuth = localStorage.getItem('isAuth');
        return isAuth
    }
    const location = useLocation();
    const isAuthRes = checkAuth();
    return isAuthRes ? (
      children
    ) : (
      <Navigate to="/" replace state={{ path: location.pathname }} />
    );
}