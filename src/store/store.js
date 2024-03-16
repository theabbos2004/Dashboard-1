import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "../Reducer/MenuReducer";
import UsersReducer from "../Reducer/UsersReducer";
import ToolsReducer from "../Reducer/ToolsReducer";

let store=configureStore({
    reducer:{
        menu:StoreReducer,
        users:UsersReducer,
        tools:ToolsReducer,
    }
})
export default store