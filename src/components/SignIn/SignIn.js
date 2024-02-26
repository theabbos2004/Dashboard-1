import React from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import SignUpForm from "../shared/SignUpForm/SignUpForm";
import SignInForm from "../shared/SignInForm/SignInForm";
import { easeIn, easeInOut, motion } from "framer-motion";

export default function SignIn() {
  let signUp = useSelector((store) =>store.users.signUp);
  return (
    <section className={styles.SignIn_page}>
      {window?.innerWidth > 567 && (
        <motion.div
          className={styles.left_sector}
          animate={{width:["100%","50%"]}}
          transition={{duration:1,ease:easeIn}}
        >
            <motion.div
              initial={{
                fontSize: "1.5rem",
                color: "var(--color-brand--4)",
              }}
              animate={{scale:[2,1],opacity:[0,1]}}
              transition={{duration:0.5,delay:1,ease:easeIn}} 
            >
              INSPIRED BY THE FUTURE:
            </motion.div>
            <motion.div
              initial={{
                fontSize: "3rem",
              }}
              animate={{scale:[2,1],opacity:[0,1]}}
              transition={{duration:0.5,delay:1.5,ease:easeIn}} 
            >
              THE VISION UI DASHBOARD
            </motion.div>
        </motion.div>
      )}
      <div
        className={styles.right_sector}
      >
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          {signUp ? (
            <div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2rem", color: "var(--color-white)" }}>
                  Welcome!
                </p>
                <p style={{ fontSize: "1rem" }}>
                  Use these awesome forms to login or create new account in your
                  project for free.
                </p>
              </div>
              <SignUpForm/>
            </div>
          ) : (
            <motion.div
              initial={{width:"100%",display:"flex",flexDirection:"column",padding:'1rem'}}
              animate={{rotateY:[180,0],opacity:[0,1]}}
              transition={{duration:1,ease:easeInOut}}
            >
              <div style={{ padding: "0 2rem",textAlign:"center",display:'flex',flexDirection:"column",gap:"1rem"}}>
                <p style={{ fontSize: "2rem", color: "var(--color-white)"}}>
                  Nice to see you!
                </p>
                <p style={{ fontSize: "1rem" }}>
                  Enter your email and password to sign in
                </p>
              </div>  
              <SignInForm/>
            </motion.div>
          )}
        </div>
        <Footer
          sx={{
            position: "absolute",
            bottom: "5%",
            width: "50%",
            padding: "0 2rem",
            gap: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            color: "var(--color-brand--4)",
            fontSize: "1rem",
          }}
        />
      </div>
    </section>
  );
}
