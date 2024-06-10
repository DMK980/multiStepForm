import React,{useContext} from 'react'
import planinfocss from "./planinfo.module.css"
import globalcss from "../../globalcss.module.css"
import Cards from './plans/Cards'
import Switch from "@mui/material/Switch"
import { store } from '../../state'

const Planinfo = () => {

    const [state,dispatch] = useContext(store)
    let {activelink,plan} = state    

    let visible = activelink == "select your plan" ? "fieldset2":"fieldset2hidden";
    let monclassname = plan == "monthly" ? `${planinfocss.month} ${planinfocss.planselectmonyr}`:`${planinfocss.month}`;
    let yrclassname = plan == "yearly" ? `${planinfocss.year} ${planinfocss.planselectmonyr}`:`${planinfocss.year}`;
    const onchange = (e)=>{
        dispatch({type:"SWITCHPLAN"})
    }

    return (
        <fieldset className={`${planinfocss[visible]} ${globalcss.Maincontainer}`}>
            <h1 className={`${globalcss.Header}`}>Select your plan</h1>
            <p className={planinfocss.description}>You have the option of monthly or yearly billing.</p>
            <section>
                <Cards planchoice="Arcade"/>
                <Cards planchoice="Advanced"/>
                <Cards planchoice="Pro"/> 
            </section>
            <div className={planinfocss.monyr}>
                <span id="monthly"className={monclassname}>Monthly</span>
                <Switch 
                    className={planinfocss.switchstyling}
                    onChange={onchange}
                    />
                <span id="yearly"className={yrclassname}>Yearly</span>
            </div>
        </fieldset>
    )
}

export default Planinfo
