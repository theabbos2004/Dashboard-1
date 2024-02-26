import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {SignUpActive,SignInFunc,} from "../../../Reducer/UsersReducer";
import { handleActive } from "../../../Reducer/MenuReducer";
import Button from "../Button/Button";
import styles from "./index.module.scss";
import { useNavigate } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
import { easeInOut, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';


export default function SignInForm() {
    const navigate = useNavigate();
    const {error,entred}=useSelector(store=>store?.users)
    const dispatch = useDispatch();
    const {register,handleSubmit,reset}=useForm({})
    const submitForm=(data)=>{
        dispatch(SignInFunc({data}))
        dispatch(handleActive({id: 1,title: "Dashboard",icon: "HomeIcon",focus: false,active: true,link: "/"}));
    }
    useEffect(()=>{
        if(entred){
            navigate("/")
            reset()
        }
    },[entred])
  return (
    <motion.div
        animate={{rotateY:[180,0],opacity:[0,1]}}
        transition={{duration:1,ease:easeInOut}}
  >
      <form style={{ border: "none", background: "transparent",margin:0}}>
        {error && (
            <div
            style={{
                padding: "0.5rem",
                border: "0.1rem solid var(--color-brand--6)",
                color: "var(--color-brand--6)",
                borderRadius: "0.5rem",
                margin: "0.5rem 0",
            }}
            >
            {error?.message}
            </div>
        )}
        <label>
          <div>Email</div>
          <input
              className={styles.formInput}
              {...register("email",{type:"email",value:"aaa"})}
          />
        </label>
        <label>
          <div>Password</div>
          <input
              className={styles.formInput}
              {...register("password",{type:"password",value:"aaa"})}
          />
        </label>
        <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
          <Toggle prop={{...register("remember")}}/>
          <p>Remember me </p>
        </div>
          <Button
              onClick={handleSubmit(submitForm)}
              type="submit"
              sx={{
                  border: "none",
                  backgroundColor: "var(--color-brand--3)",
              }}
          >
              Sign In
          </Button>
      </form>
      <div
          style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          margin: "1rem 0",
          }}
      >
          <p style={{ color: "var(--color-brand--4)" }}>
          Don't have an account?
          </p>
          <p
          onClick={() => dispatch(SignUpActive(true))}
          style={{ cursor: "pointer",color:"white"}}
          >
          Sign up
          </p>
      </div>
  </motion.div>
  )
}
