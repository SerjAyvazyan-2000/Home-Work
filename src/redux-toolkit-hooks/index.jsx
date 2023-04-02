import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import  {addValue,deleteValue} from "../components/store/combineRedusers/reducers/input-value";

const ReactToolkit = () => {
    const list = useSelector(state => state.InputValue.list)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(list)
    },[])

  const [value,setValue] = useState('')

    const [text,setText] = useState([])


   const handleClick = () => {
       dispatch(addValue(value))
   }

   const handleDelete = (index) => {
    dispatch(deleteValue(index))
   }

    return <div className="redux-toolkit">
        <input value={value}  name="name" onChange={(event) => setValue(event.target.value)} type="text" placeholder="Search..."/>

        <button onClick={handleClick}>SAVE</button>
        {list.map((item,index)=>{
            return <h1 onClick={()=>handleDelete(index)}>{item} {index +1}</h1>
        })}
    </div>
}

export default ReactToolkit