import React, { useContext, useRef, useEffect } from 'react'
import addonscss from "./addons.module.css"
import globalcss from "../../globalcss.module.css"
import { store } from '../../state'

const Addons = () => {

    const [state,dispatch] = useContext(store)
    let{plan,planpricing,addons,activelink}=state
    let addonss = useRef()

    // styling for when addon is selected
    useEffect(() => {
        let addonschildren = addonss.current.children 
        if(addons.onlineservice){
            if(!addonschildren[0].classList.contains(`${addonscss.checked}`)){
                addonschildren[0].classList.add(`${addonscss.checked}`)
            }
        }else{
            if(addonschildren[0].classList.contains(`${addonscss.checked}`)){
                addonschildren[0].classList.remove(`${addonscss.checked}`)
            }
        }
        if(addons.largerstorage){
            if(!addonschildren[1].classList.contains(`${addonscss.checked}`)){
                addonschildren[1].classList.add(`${addonscss.checked}`)
            }
        }else{
            if(addonschildren[1].classList.contains(`${addonscss.checked}`)){
                addonschildren[1].classList.remove(`${addonscss.checked}`)
            }
        }
        if(addons.customizableprofile){
            if(!addonschildren[2].classList.contains(`${addonscss.checked}`)){
                addonschildren[2].classList.add(`${addonscss.checked}`)
            }
        }else{
            if(addonschildren[2].classList.contains(`${addonscss.checked}`)){
                addonschildren[2].classList.remove(`${addonscss.checked}`)
            }
        }
        return () => {
            
        };
    }, [addons]);

    let onchange = (e)=>{
        dispatch({type:"ADD_ADDONS",payload:e.target.id})
    }

    let visible = activelink == "add-ons"? "main":"mainhidden";
    let onlineservice = plan == "monthly" ? `${planpricing.onlineservice.monthly}/mo`:`${planpricing.onlineservice.yearly}/yr`;
    let largerstorage = plan == "monthly" ? `${planpricing.largerstorage.monthly}/mo`:`${planpricing.largerstorage.yearly}/yr`;
    let customizableprofile = plan == "monthly" ? `${planpricing.customizableprofile.monthly}/mo`:`${planpricing.customizableprofile.yearly}/yr`;

    return (
        <fieldset className={`${globalcss.Maincontainer} ${addonscss[visible]}`}>
            <h1  className={`${globalcss.Header}`}>Pick add-ons</h1>
            <p >Add-ons help enhance your gaming experience</p>
            <section ref={addonss}>
                <label htmlFor='onlineservice'>
                    <div>
                        <input onChange={onchange}className={`${addonscss.input}`}id="onlineservice"type="checkbox"/>
                    </div>
                    <div>
                        <h4>Online service</h4>
                        <p>Access to multiplayer games</p>
                    </div>
                    <div className={`${addonscss.pricing}`}>
                        {onlineservice}
                    </div>
                </label>
                <label htmlFor='largerstorage'>
                    <div>
                        <input onChange={onchange}className={`${addonscss.input}`}id="largerstorage"type="checkbox"/>
                    </div>
                    <div>
                        <h4>Larger storage</h4>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <div className={`${addonscss.pricing}`}>
                        {largerstorage}
                    </div>
                </label>
                <label htmlFor='customizableprofile'>
                    <div>
                        <input onChange={onchange}className={`${addonscss.input}`}id="customizableprofile"type="checkbox"/>
                    </div>
                    <div>
                        <h4>Customizable profile</h4>
                        <p>Custom theme on your profile</p>
                    </div>
                    <div className={`${addonscss.pricing}`}>
                        {customizableprofile}
                    </div>
                </label>
            </section>
        </fieldset>
    )
}

export default Addons
