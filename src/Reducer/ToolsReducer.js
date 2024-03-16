import { createSlice } from "@reduxjs/toolkit"

const initialState={
    windowsWidth:null
}
const toolsReducer=createSlice({
    name:"tools",
    initialState,
    reducers:{
        windowWidthFunc:(state,action)=>{
            state.windowsWidth=action.payload
        }
    }
})
export const {windowWidthFunc}=toolsReducer.actions
export default toolsReducer.reducer