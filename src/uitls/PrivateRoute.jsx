import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    let auth=useSelector((store) =>store?.users?.entred)
    return (
        auth?<Outlet/>:<Navigate to='/Sign'/>
    )
}
