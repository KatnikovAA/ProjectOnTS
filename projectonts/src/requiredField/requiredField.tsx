import React from "react";
import './requiredField.css';
import { useRef } from "react";
type Props = {
    placeholderText:string;
    classNameText?:string;
    lengthValueFild:any;
}

export const RequiredField:React.FC<Props> = ({placeholderText,classNameText,lengthValueFild}:Props) =>{
    const inputText = useRef<HTMLInputElement> (null!)
    const heandelChange = (event:React.ChangeEvent<HTMLInputElement>):void =>{

        if(event.target.value.length === 0){
            inputText.current.style.backgroundColor = "yellow";
        } else {    
            inputText.current.style.backgroundColor = "white";
        } 
        lengthValueFild(event);
    }
    return(
        <div>
            <input type="text" required placeholder={placeholderText} className='requiredFieldsYellow' onChange={heandelChange} ref={inputText}/>
        </div>
    )
}