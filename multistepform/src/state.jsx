import {createContext } from "react";

export const store = createContext()

export const initialState = {
    activelink: "personal info",
    name: "",
    emailaddress: "",
    phonenumber: "",
    error: "noerror"
}

export const reducer = (state,action) =>{
    switch(action.type){
        case "ACTIVELINK":
            if(!state.name || !state.emailaddress || !state.phonenumber){
                return{...state,error:"error"}
            } else if(state.name || state.emailaddress || state.phonenumber){
                return {...state,activelink:action.payload,error:"noerror"}
            }
        case "INFOINPUT":
            if (action.payload.name){
                return {...state,name:action.payload.name}
            }else if (action.payload.email){
                return {...state,emailaddress:action.payload.emailaddress}
            }else if (action.payload.phonenumber){
                return {...state,phonenumber:action.payload.phonenumber}
            } else {
                return {...state,name:"",emailaddress:"",phonenumber:""}
            }
    }
}