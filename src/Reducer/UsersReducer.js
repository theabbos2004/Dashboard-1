import { createSlice } from "@reduxjs/toolkit";
let initialState={
    users:[
        {
          id:1,
          email:"aaa",
          password:"aaa",
          remember:false,
        },
        {
          id:2,
          email:"bbb",
          password:"bbb",
          remember:false,
        },
      ],
    entred:false,
    error:null,
    errorSignUp:null,
    signUp:false,
}

let UsersReducer=createSlice({
    name:"menu",
    initialState,
    reducers:{
        SignInFunc:(state,action)=>{
          const {payload}=action
          state.error={};
          let {email,password}={email:false,password:false}
          state.users.forEach((item)=>{
            if(payload?.data?.email===item?.email && payload?.data?.password===item?.password){
              email=true
              password=true
            }
            else if(payload?.data?.email===item?.email){
              email=true
            }
          })
          if(email && password && payload?.data?.remember){
              localStorage.setItem("data",payload?.data)
              state.error=null
              state.entred=true
            }
          else if(email && password){
              state.error=null
              state.entred=true
            }
          else if(email && !password){
            state.error={message:'password error'}
            state.entred=false
          }
          else if(!email && payload?.email){
            state.error={message:'email error'}
            state.entred=false
          }
          else{
            state.error=null
            state.entred=false
          }
        },
      SignInActive:(state,action)=>{
          state.entred=false
      },
      SignUpFunc:(state,action)=>{
        const {payload} =action
        if(!payload?.data?.name){
          state.errorSignUp={message:"enter name"}
        }
        else if(!payload?.data?.email){
          state.errorSignUp={message:"enter email"}
        }
        else if(!payload?.data?.password){
          state.errorSignUp={message:"enter password"}
        }
        else{
          state.errorSignUp=null
          state.entred=true
        }
      },
      SignUpActive:(state,action)=>{
          state.signUp=action.payload
      }
    }
})

export const {SignInFunc,SignUpFunc,SignUpActive,SignInActive} = UsersReducer.actions
export default UsersReducer.reducer