import React from "react";
import './requiredField.css';
type Props = {
    placeholderText:string;
    classNameText:string;
    lengthValueFild;
}
export const RequiredField:React.FC<Props> = ({placeholderText,classNameText,lengthValueFild}:Props) =>{

    const heandelChange = (event) =>{
        lengthValueFild(event);
    }
    return(
        <div>
            <input type="text" required placeholder={placeholderText} className={classNameText} onChange={heandelChange} />
        </div>
    )
}