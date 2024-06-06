import {createContext } from "react";

export const store = createContext()

export const initialState = {
    activelink: "select your plan",
    name: "",
    emailinput: "",
    phonenumber: "",
    error: "noerror",
    plan: "monthly",
    selectedplan: "arcade",
    planpricing: {
        arcade:{monthly : "$9",yearly : "$90"},
        advanced:{monthly : "$12",yearly : "$120"},
        pro:{monthly : "$15",yearly : "$150"}
    }
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
        case "CHANGEPLAN":
            return {...state,selectedplan:action.payload}
        case "SWITCHPLAN":
            if(state.plan == "monthly"){
                return {...state,plan:"yearly"}
            }else{
                return {...state,plan:"monthly"}
            }
    }
}