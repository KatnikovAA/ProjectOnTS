import React, { useState , useEffect} from "react";

interface Props{
    callFunc:any;
    flg:string;
    id?:number;
}

export const Button:React.FC<Props> = ({callFunc,flg,id}:Props) =>{
    const heandelOnClick = ():void =>{
        
        /*
        flg == "Add" && callFunc(0,3);
        flg == "Delete" && callFunc(id);
        */
    }
    return(
        // сразу на onClick вызываем пропс фунцию а в родителе вызванем анонимную фкнцию 
        <button onClick={callFunc}> 
            Поля
        </button>
    )
}