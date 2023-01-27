import { createSlice } from "@reduxjs/toolkit";


const initialState={
    name:"",
    email:"",
    photo:""

}

const userSlice=createSlice({ 
    name:"user",
    initialState,
    reducers:{
        setUserLogin: (state,action) =>{

        },
        setSignOut:(state)=>{
            state.name=null,
            state.email=null
        }
    }

})