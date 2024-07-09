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
            if(!addonschildren[0].classList.contains(`${addonscss.checkedones}`)){
                addonschildren[0].classList.add(`${addonscss.checkedones}`)
            }
        }else{
            if(addonschildren[0].classList.contains(`${addonscss.checkedones}`)){
                addonschildren[0].classList.remove(`${addonscss.checkedones}`)
            }
        }
        if(addons.largerstorage){
            if(!addonschildren[1].classList.contains(`${addonscss.checkedones}`)){
                addonschildren[1].classList.add(`${addonscss.checkedones}`)
            }
        }else{
            if(addonschildren[1].classList.contains(`${addonscss.checkedones}`)){
                addonschildren[1].classList.remove(`${addonscss.checkedones}`)
            }
        }
        if(addons.customizableprofile){
            if(!addonschildren[2].classList.contains(`${addonscss.checkedones}`)){
                addonschildren[2].classList.add(`${addonscss.checkedones}`)
            }
        }else{
            if(addonschildren[2].classList.contains(`${addonscss.checkedones}`)){
                addonschildren[2].classList.remove(`${addonscss.checkedones}`)
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
            <p className={addonscss.topdescription}>Add-ons help enhance your gaming experience</p>
            <section ref={addonss}>
                <label htmlFor='onlineservice'>
                    <div className={addonscss.leftcontainer}>
                        <div>
                            <input onChange={onchange}className={`${addonscss.input}`}id="onlineservice"type="checkbox"/>
                            <span className={addonscss.inputvisual}></span>
                        </div>
                        <div className={addonscss.info}>
                            <h4>Online service</h4>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <div className={`${addonscss.pricing}`}>
                        {onlineservice}
                    </div>
                </label>
                <label htmlFor='largerstorage'>
                    <div className={addonscss.leftcontainer}>
                        <div>
                            <input onChange={onchange}className={`${addonscss.input}`}id="largerstorage"type="checkbox"/>
                        </div>
                        <div className={addonscss.info}>
                            <h4 >Larger storage</h4>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <div className={`${addonscss.pricing}`}>
                        {largerstorage}
                    </div>
                </label>
                <label htmlFor='customizableprofile'>
                    <div className={addonscss.leftcontainer}>
                        <div>
                            <input onChange={onchange}className={`${addonscss.input}`}id="customizableprofile"type="checkbox"/>
                        </div>
                        <div className={addonscss.info}>
                            <h4>Customizable profile</h4>
                            <p>Custom theme on your profile</p>
                        </div> 
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
