import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/index"
import { navborIsActive } from "../../Reducer/MenuReducer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PrivateRoute from "../../uitls/PrivateRoute";

function AppLayout() {
  let navborActive=useSelector(store=>store.menu.navborActive)
  let dispatch=useDispatch()
  useEffect(()=>{
    if(window.innerWidth<576){
      dispatch(navborIsActive(false))
    }
  },[dispatch])
  return (
    <div className={styles.layout}>
      {navborActive?<Navbar/>:""}
      <div style={{width:navborActive ? "85%" : "100%",display:'flex',flexDirection:"column",gap:'1rem'}}>
        <Header/>
        <PrivateRoute/>
        <Footer sx={{minHeight:"2rem",display:"flex",alignItems:"center",justifyContent:"space-between",color:"white"}}/>
      </div>
    </div>
  );
}

export default AppLayout;
