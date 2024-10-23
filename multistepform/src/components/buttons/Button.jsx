import React,{useContext} from 'react'
import buttoncss from "./button.module.css"
import { Button } from '@mui/material'
import { store } from '../../state'


const Buttoncomp = () => {

    let[state,dispatch] = useContext(store)

    let {activelink} = state

    let visibility = activelink == "personal info" ? "hidden":"visible" 
    let text = activelink == "summary" ? "Confirm" : "Next Step"

    let pages = ["personal info","select your plan","add-ons","summary"]
   

    let nextpage = ()=>{
        if(activelink != "summary"){
            dispatch({type:"ACTIVELINK", payload:pages[pages.indexOf(activelink)+1]})
        }
    }
    let lastpage = ()=>{
        if(activelink != "personal info"){
            dispatch({type:"ACTIVELINK", payload:pages[pages.indexOf(activelink)-1]})
        }
    }

    return (
        <div className={buttoncss.btncontainer}>
            <Button 
                sx={{
                width:"fit-content",
                color:"hsl(231, 11%, 63%)",
                visibility:`${visibility}`
                }}
                onClick={lastpage}
            >Go Back
            </Button>
            <Button 
                sx={{
                    width:"fit-content"
                }}
                variant="contained"
                onClick={nextpage}
            >{`${text}`}
            </Button>
        </div>
    )
}

export default Buttoncomp
