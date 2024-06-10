import React,{useContext,useEffect,useRef} from 'react'
import cardscss from "./cards.module.css"
import arcadesvg from "../../../assets/images/icon-arcade.svg"
import advancedsvg from "../../../assets/images/icon-advanced.svg"
import prosvg from "../../../assets/images/icon-pro.svg"
import { store } from '../../../state'

const Cards = ({planchoice}) => {

    const [state,dispatch] = useContext(store)
    let {plan,planpricing,selectedplan,activelink} = state
    let buttonref = useRef()

    let monthoryear_pricing = plan == "monthly" ? `${planpricing[planchoice].monthly}/mo`:`${planpricing[planchoice].yearly}/yr`
    let promotion = plan == "yearly" ? "block":"none";
    let selectedplancard = planchoice == selectedplan ? "activestyling":"nostyling";
    let svgselect = planchoice == "Arcade" ? arcadesvg : planchoice == "Advanced" ? advancedsvg :prosvg;

    useEffect(() => {
        let btn = buttonref.current
        if(btn.id == selectedplan){
            if(!btn.classList.contains(`${cardscss.selected}`)){
                btn.classList.add(`${cardscss.selected}`)
            }
        } else {
            if(btn.classList.contains(`${cardscss.selected}`)){
                btn.classList.remove(`${cardscss.selected}`)
            }
        }
        return () => {
            
        };
    }, [selectedplan]);

    const onclick = ()=>{
        dispatch({type:"CHANGEPLAN",payload:planchoice})
    }

    return (
        <button 
            type="button"
            id={planchoice}
            className={`${cardscss.card} ${cardscss[selectedplancard]}`}
            ref={buttonref}
            onClick={onclick}
            >
            <img src={svgselect}alt="arcade symbol"/>
            <div>
                <h4>{planchoice}</h4>
                <p>{monthoryear_pricing}</p>
                <p className={cardscss.promostyle}style={{display:promotion}}>2 months free</p>
            </div>
        </button>
    )
}

export default Cards
