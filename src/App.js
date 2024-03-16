import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { navborIsActive } from "./Reducer/MenuReducer";
import AppLayout from "./Layout/AppLayout";

import Loading from "./components/shared/Loding/Loding";
import { windowWidthFunc } from "./Reducer/ToolsReducer";

const DashboardPage=React.lazy(()=>import("./pages/DashboardPage/DashboardPage"))
const TablePage=React.lazy(()=>import("./pages/TablePage/TablePage"))
const BillingPage=React.lazy(()=>import("./pages/BillingPage/BillingPage"))
const ProfilePage=React.lazy(()=>import("./pages/ProfilePage/ProfilePage"))

const SignInPage=React.lazy(()=>import("./pages/SignInPage/SignInPage"))

function App() {
  let dispatch=useDispatch()
  const setWindowWidth=useCallback(()=>{
    if(window.innerWidth<768){
      dispatch(navborIsActive(false))
    }
    else{
      dispatch(navborIsActive(true))
    }
    dispatch(windowWidthFunc(window.innerWidth))
  },[dispatch])

  useEffect(()=>{
    setWindowWidth()
    window.addEventListener("resize",setWindowWidth)
    return ()=>window.removeEventListener("resize",setWindowWidth)
  },[setWindowWidth])

  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<React.Suspense fallback={<Loading/>}><DashboardPage/></React.Suspense>}/>
            <Route path= "Table" element={<React.Suspense fallback={<Loading/>}><TablePage/></React.Suspense>}/>
            <Route path= "Billing" element={<React.Suspense fallback={<Loading/>}><BillingPage/></React.Suspense>}/>
            <Route path= "Profile" element={<React.Suspense fallback={<Loading/>}><ProfilePage/></React.Suspense>}/>
          </Route>
          <Route path="/Sign" element={<React.Suspense fallback={<Loading/>}><SignInPage/></React.Suspense>}/>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
