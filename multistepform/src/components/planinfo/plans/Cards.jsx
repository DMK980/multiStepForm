import React,{useContext,useEffect,useRef} from 'react'
import cardscss from "./cards.module.css"
import arcadesvg from "../../../assets/images/icon-arcade.svg"
import { store } from '../../../state'

const Cards = ({planchoice}) => {

    const [state,dispatch] = useContext(store)
    let {plan,planpricing,selectedplan} = state
    let buttonref = useRef()

    let monthoryear_pricing = plan == "monthly" ? `${planpricing[planchoice].monthly}/mo`:`${planpricing[planchoice].monthly}/yr`
    let promotion = plan == "yearly" ? "block":"none";

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
            className={cardscss.card}
            ref={buttonref}
            onClick={onclick}
            >
            <img src={arcadesvg}alt="arcade symbol"/>
            <div>
                <h4>Arcade</h4>
                <p>{monthoryear_pricing}</p>
                <p style={{display:promotion}}>2 months free</p>
            </div>
        </button>
    )
}

export default Cards
