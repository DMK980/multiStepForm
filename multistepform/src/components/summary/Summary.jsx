import React,{useContext, useEffect} from 'react'
import summarycss from "./summary.module.css"
import globalcss from "../../globalcss.module.css"
import { store } from '../../state'

const Summary = () => {

    const [state,dispatch] = useContext(store)
    let {activelink,selectedplan,plan,addons,planpricing} = state

    let visible = activelink == "summary" ? "main":"mainhidden";
    let monoryr = plan == "monthly" ? "/mo" : "/yr";

    let total = Number(planpricing[selectedplan][plan].split("$")[1]) +
                Number(addons.onlineservice ? planpricing[`onlineservice`][`${plan}`].split("$")[1]:"0")+
                Number(addons.largerstorage ? planpricing[`largerstorage`][`${plan}`].split("$")[1]:"0")+
                Number(addons.customizableprofile ? planpricing[`customizableprofile`][`${plan}`].split("$")[1]:"0")
    const onclick = ()=>{
        dispatch({type:"ACTIVELINK",payload:"select your plan"})
    }
    
    
    return (
        <fieldset className={`${globalcss.Maincontainer} ${summarycss[visible]}`}>
            <h1 className={`${globalcss.Header}`}>Finishing up</h1>
            <p className={`${summarycss.description}`}>Double-check everything looks OK before confirming</p>
            <section className={`${summarycss.centersection}`}>
                <section className={`${summarycss.centersection_top}`}>
                    <div className={`${summarycss.selectedoption} ${summarycss.plan}`}>
                        <div>
                            <p className={`${summarycss.selectedplan} ${summarycss.summarytxt}`}>{`${selectedplan} (${plan})`}</p>
                            <a className={`${summarycss.changes}`}onClick={onclick}>Change</a>
                        </div>
                        <span className={`${summarycss.pricing} ${summarycss.pricingplan}`}>{`${planpricing[selectedplan][plan]}${monoryr}`}</span>
                    </div>
                    {
                        addons.onlineservice ? 
                        <div className={summarycss.selectedoption}>
                            <p>{`Online service`}</p>
                            <span className={`${summarycss.pricing}`}>{`+${planpricing["onlineservice"][`${plan}`]}${monoryr}`}</span>
                        </div>
                        : null
                    }
                    {
                        addons.largerstorage ? 
                        <div className={summarycss.selectedoption}>
                            <p>{`Larger storage`}</p>
                            <span className={`${summarycss.pricing}`}>{`+${planpricing["largerstorage"][`${plan}`]}${monoryr}`}</span>
                        </div>
                        :null
                    }
                    {
                        addons.customizableprofile ? 
                        <div className={summarycss.selectedoption}>
                            <p>{`Customizable profile`}</p>
                            <span className={`${summarycss.pricing}`}>{`+${planpricing["customizableprofile"][`${plan}`]}${monoryr}`}</span>
                        </div>
                        :null
                    }           
                </section>
                <section className={summarycss.centersection_bottom}>
                    <div className={summarycss.selectedoption}>
                        <p>Total (per month)</p>
                        <span className={`${summarycss.totalpricing}`}>{`+$${total}${monoryr}`}</span>
                    </div>    
                </section>
            </section>
        </fieldset>
    )
}

export default Summary
