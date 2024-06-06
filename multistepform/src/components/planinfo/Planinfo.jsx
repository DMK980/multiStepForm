import React,{useContext} from 'react'
import planinfocss from "./planinfo.module.css"
import Cards from './plans/Cards'
import Switch from "@mui/material/Switch"
import { store } from '../../state'

const Planinfo = () => {

    const [state,dispatch] = useContext(store)

    const onchange = (e)=>{
        dispatch({type:"SWITCHPLAN"})
    }

    return (
        <fieldset className={planinfocss.fieldset2}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <section>
                <Cards planchoice="arcade"/>
                <Cards planchoice="advanced"/>
                <Cards planchoice="pro"/> 
            </section>
            <div>
                <span className={planinfocss.month}>Monthly</span>
                <Switch onChange={onchange}/>
                <span className={planinfocss.year}>Yearly</span>
            </div>
        </fieldset>
    )
}

export default Planinfo
