import React from 'react'
import './main.css';
import { useEffect,useState,useRef } from 'react';
import { RequiredField } from '../requiredField/requiredField';
interface Props {
    text: string;
  }

export function Main (): ReturnType<React.FC> {

    const [valueLengthField,setValueLengthField] = useState<number>(0)


    const lengthValueFild = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setValueLengthField(e.target.value.length)
        
    }
    //classNameText = {valueLengthField > 0 ? 'requiredFields' : 'requiredFieldsYellow'}
    return(
        <div>
    
            <RequiredField placeholderText={"Имя"}  lengthValueFild ={lengthValueFild}></RequiredField>
            <RequiredField placeholderText={"Фамилия"}  lengthValueFild ={lengthValueFild}></RequiredField>

        </div>
    )
}

