import React , {ChangeEvent, FC} from "react";
import './requiredField.css';
import { useRef } from "react";

type Props = {
    placeholderText:any;
    classNameText?:string;
    lengthValueFild:(e:ChangeEvent<HTMLInputElement>)=>void; // так как это функцию я уже определил в родт комопнент можно скопировать от туда  но : указать через =>
}


export const RequiredField:FC<Props> = ({placeholderText,classNameText,lengthValueFild}:Props) =>{          //тип определил как React.FC<Props>  но если ипорировать FC то можно удалить
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