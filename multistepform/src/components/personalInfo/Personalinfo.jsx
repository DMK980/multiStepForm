import React,{useContext, useRef,useEffect}from 'react'
import personalinfocss from "./personalinfo.module.css"
import { store } from '../../state'

const Personalinfo = () => {
    
    const [state,dispatch] = useContext(store)
    let {activelink,error,name,emailinput,phonenumber} = state
    let fieldset = useRef()
    const visible = activelink == "personal info"? "fieldset":"fieldsethidden"
    
    useEffect(() => {
        let childrenoffieldset = fieldset.current.children
        // error handling
        for(let x=0; x < childrenoffieldset.length;x++){
            if(childrenoffieldset[x].id == "name_container" && !name &&
            !childrenoffieldset[x].classList.contains(`${personalinfocss.errorshown}`)){
                childrenoffieldset[x].classList.add(`${personalinfocss.errorshown}`)
            }else if(childrenoffieldset[x].id == "name_container" && name &&
            childrenoffieldset[x].classList.contains(`${personalinfocss.errorshown}`)){
                childrenoffieldset[x].classList.remove(`${personalinfocss.errorshown}`)
            }else if(childrenoffieldset[x].id == "email_container" && !emailinput &&
            !childrenoffieldset[x].classList.contains(`${personalinfocss.errorshown}`)){
                childrenoffieldset[x].classList.add(`${personalinfocss.errorshown}`)
            }else if(childrenoffieldset[x].id == "email_container" && emailinput &&
            childrenoffieldset[x].classList.contains(`${personalinfocss.errorshown}`)){
                childrenoffieldset[x].classList.remove(`${personalinfocss.errorshown}`)
            }else if(childrenoffieldset[x].id == "telephone_container" && !phonenumber &&
            !childrenoffieldset[x].classList.contains(`${personalinfocss.errorshown}`)){
                childrenoffieldset[x].classList.add(`${personalinfocss.errorshown}`)
            }else if(childrenoffieldset[x].id == "telephone_container" && phonenumber &&
            childrenoffieldset[x].classList.contains(`${personalinfocss.errorshown}`)){
                childrenoffieldset[x].classList.remove(`${personalinfocss.errorshown}`)
            }
        }
        return () => {
            
        };
    }, [name,emailinput,phonenumber]);

    const onchange = (e)=>{
        if(e.target.id == "name"){
            dispatch({type:"NAMEUPDATE",payload:{name:e.target.value}})
        }
        if(e.target.id == "email"){
            console.log(e.target.value)
            dispatch({type:"EMAILUPDATE",payload:{emailinput:e.target.value}})
        }
        if(e.target.id == "telephone_number"){
            dispatch({type:"PHONEUPDATE",payload:{phonenumber:e.target.value}})
        }
    }

    return (
        <fieldset className={personalinfocss[visible]}ref={fieldset}>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <section id="name_container">
                <label htmlFor="name">Name</label>
                <p>This field is required</p>
                <input id="name"type="text"onChange={onchange}placeholder='e.g.Stephen King' required/>
            </section>
            <section id="email_container">
                <label htmlFor="email">Email Address</label>
                <p>This field is required</p>
                <input id="email"type="email"onChange={onchange}placeholder='e.g.Stephen King@lorem.com' required/>
            </section>
            <section id="telephone_container">
                <label htmlFor="telephone number">Phone Number</label>
                <p>This field is required</p>
                <input id="telephone_number"onChange={onchange}type="tel"placeholder='e.g.+1 234 567 890' required/>
            </section>
        </fieldset>
    )
}

export default Personalinfo;
