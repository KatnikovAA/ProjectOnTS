import React from 'react'
import './main.css';
import { useEffect,useState,useRef } from 'react';

interface Props {
    text: string;
  }

export function Main ({text}): ReturnType<React.FC> {

    const [valueFields,setValueFields] = useState<number|string>()

    const inputText = useRef<HTMLInputElement | undefined >()

    const valueLength = (e:any) => {
        setValueFields(e.target.value)

        if(e.target.value.length !== 0){
            inputText.current.style.backgroundColor = "red";
        } else {    
            inputText.current.style.backgroundColor = "yellow";
        } 
    }

    return(
        <div>
           
                <input type="text" required placeholder={text} className='requiredFields' onChange={valueLength} ref={inputText}/>
                <div>{valueFields}</div>

        </div>
    )
}