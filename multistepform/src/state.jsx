import {createContext } from "react";

export const store = createContext()

export const initialState = {
    activelink: "personal info",

}

export const reducer = (state,action) =>{
    switch(action.type){
        case "ACTIVELINK":
            return {...state,activelink:action.payload}
    }
}