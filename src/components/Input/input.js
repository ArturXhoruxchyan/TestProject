import React from "react";
import {useController} from 'react-hook-form';
import './input.css'

const Input=({control,name,type,placeholder})=>{
    //const [value,setValue]=useState("")
    const {field}=useController({
        name,
        control
    })

    return(
        <div>
            <input className='inp' value={undefined} {...field} type={type} placeholder={placeholder} required={true} />
        </div>
    )
}

export default Input;