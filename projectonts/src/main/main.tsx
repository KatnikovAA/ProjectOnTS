import React from 'react'
import './main.css';
import { useEffect,useState,useRef } from 'react';
import { RequiredField } from '../requiredField/requiredField.tsx';
interface Props {
    text: string;
  }

export function Main (): ReturnType<React.FC> {

    const [valueLengthField,setValueLengthField] = useState<number>(0)
    const inputText = useRef<HTMLInputElement | undefined> (null!)

    const lengthValueFild = (e:any) => {
        setValueLengthField(e.target.value.length)
        
       /* 
        if(e.target.value.length !== 0){
            inputText.current.style.backgroundColor = "red";
        } else {    
            inputText.current.style.backgroundColor = "yellow";
        } 
        */
    }

    return(
        <div>
            <RequiredField placeholderText={"Имя"} classNameText = {valueLengthField > 0 ? 'requiredFields' : 'requiredFieldsYellow'} lengthValueFild ={lengthValueFild}></RequiredField>
        </div>
    )
}

