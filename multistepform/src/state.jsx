import {createContext } from "react";

export const store = createContext()

export const initialState = {
    activelink: "personal info",
    name: "",
    emailinput: "",
    phonenumber: "",
    error: "noerror"
}

export const reducer = (state,action) =>{
    switch(action.type){
        case "ACTIVELINK":
            if(!state.name || !state.emailinput || !state.phonenumber){
                return{...state,error:"error"}
            } else if(state.name || state.emailaddress || state.phonenumber){
                return {...state,activelink:action.payload,error:"noerror"}
            }
        case "NAMEUPDATE":
            if (action.payload.name){
                return {...state,name:action.payload.name}
            }else {
                return {...state,name:""}
            }
        case "EMAILUPDATE":
            if (action.payload.emailinput){
                return {...state,emailinput:action.payload.emailinput}
            }else{
                return {...state,emailinput:""}
            }
        case "PHONEUPDATE":
            if (action.payload.phonenumber){
                return {...state,phonenumber:action.payload.phonenumber}
            } else {
                return {...state,phonenumber:""}
            }
    }
}