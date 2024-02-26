import React from 'react'
import SignIn from '../../components/SignIn/SignIn';
import { easeInOut, motion } from "framer-motion";
import IntroMenu from "../../components/shared/IntroMenu/IntroMenu";

export default function SignInPage() {
  const intromenuProp={
    initial:{
      position: "fixed",  
      minWidth: window.innerWidth > 576 ? "60%" : "90%",
      zIndex: "100",
      top: "1%",
      left: "50%",
    },
    animate:{y:["-100%","0%"],x:["-50%","-50%"]},
    transition:{delay:2,duration:1,ease:easeInOut}
  }
  return (
    <>
      <motion.div {...intromenuProp}>
       <IntroMenu/>
      </motion.div>
      <SignIn/>
    </>
  )
}
