import { SignUpFunc, SignUpActive } from "../../../Reducer/UsersReducer";
import { handleActive } from "../../../Reducer/MenuReducer";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Toggle from "../Toggle/Toggle";
import { motion, easeInOut } from "framer-motion";
import { useEffect } from "react";
export default function SignUpForm() {
  const navigate = useNavigate();
    const {errorSignUp,entred}=useSelector(store=>store.users)
    const dispatch = useDispatch();
    const {register,handleSubmit,reset}=useForm({})
    const submitForm=(data)=>{
        dispatch(SignUpFunc({data}))
        dispatch(handleActive({id: 1,title: "Dashboard",icon: "HomeIcon",focus: false,active: true,link: "/"})
        );
    }
    useEffect(()=>{
      if(entred){
        reset()
        navigate("/")
      }
    },[entred])
  return (
    <motion.div
      animate={{rotateY:[180,0],opacity:[0,1]}}
      transition={{duration:1,ease:easeInOut}}
    >
      <form style={{ border: "none", background: "transparent",margin:0}}>
        {errorSignUp && (
            <div
            style={{
                padding: "0.5rem",
                border: "0.1rem solid var(--color-brand--6)",
                color: "var(--color-brand--6)",
                borderRadius: "0.5rem",
                margin: "0.5rem 0",
            }}
            >
            {errorSignUp?.message}
            </div>
        )}
        <label>
          <div>Name</div>
          <input
              className={styles.formInput}
              {...register("name",{type:"text"})}
          />
        </label>
        <label>
          <div>Email</div>
          <input
              className={styles.formInput}
              {...register("email",{type:"email"})}
          />
        </label>
        <label>
          <div>Password</div>
          <input
              className={styles.formInput}
              {...register("password",{type:"password"})}
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
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.1rem",
            margin: "1rem 0",
          }}
        >
          <p style={{ color: "var(--color-brand--4)" }}>
            Already have an account?
          </p>
          <p
            onClick={() => dispatch(SignUpActive(false))}
            style={{ cursor: "pointer" }}
          >
            Sign In
          </p>
        </div>
      </form>
    </motion.div>
  );
}
