import React from 'react'
import './main.css';
import { useEffect,useState,useRef } from 'react';
import { RequiredField } from '../requiredField/requiredField';
import { Button } from './button/button';

interface Props {
    text: string;
  }

interface Props {
  text: string;
}
  

export function Main (): ReturnType<React.FC> {

    const [valueLengthField,setValueLengthField] = useState<number>(0)
    const [countFild,setCountFild] = useState(0)
    const [arrField,setArrField] = useState<any>([]);
    useEffect(()=>{
      console.log(arrField)
    },[arrField])

    const lengthValueFild = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setValueLengthField(e.target.value.length)        
    }

      function getRandomArbitrary(min:number, max:number):void{
        
        let result:number =  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.floor(max));
        let newArr:any = []
        for(let i = 0; i < result ; i++){
          newArr.push({id:i}) //пропушили в массив объект и сразу передали ключ что бы по нему например сразу удалять а в состояние нельзя хранить комопненты
        }
        setCountFild(result)
        setArrField(newArr) 
      }



      const deletFildFromArr = (id:number):void =>{
        console.log(arrField)
        let newArrAfterDel = arrField.filter((post:any,index:number)=>{
          return (post.id !== id)
        }) 
        setArrField(newArrAfterDel)
      }
    //classNameText = {valueLengthField > 0 ? 'requiredFields' : 'requiredFieldsYellow'}
    return(
        <div>
    
            <RequiredField placeholderText={"Имя"}  lengthValueFild ={lengthValueFild} ></RequiredField>
            <RequiredField placeholderText={"Фамилия"}  lengthValueFild ={lengthValueFild}></RequiredField>
            <Button callFunc = {()=>{getRandomArbitrary(0,5)}} flg='Add'/>  {/* передали анонимную фкнцию и сразу в ней вызываем и передаем агрумент*/}
            <div>{countFild}</div>
            {
              arrField && 
              <div>{arrField.map((item:any)=>(
                <div key={item.id}>
                  <RequiredField placeholderText={item.id}  lengthValueFild ={lengthValueFild}></RequiredField> 
                  <Button id={item.id} callFunc = {()=>{deletFildFromArr(item.id)}} flg='Delete'></Button>  {/* передали анонимную фкнцию и сразу в ней вызываем и передаем агрумент перемнную из замыкания*/}
                       
              </div>

              ))} </div>
            }
        </div>
    )
}
