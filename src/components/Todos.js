import React ,{useState,useEffect} from 'react'
import axios from "axios";

export default function Todos() {
    const [toDos, setToDos] = useState([])
    const [newTask, setNewTask] = useState("")
    useEffect(async() => {
       const result = await axios.get(
         "https://test-back-end-to.herokuapp.com/toDos"
       );
       setToDos(result.data);
    },[])
const changeNewTask =(e)=>{
    setNewTask(e.target.value);
}
const addNewTask = ()=>{
    const copyArr = [...toDos]
    copyArr.push(newTask);
    setToDos(copyArr);
}
const deleteItem = (i)=>{
    const copyArr = [...toDos];
    copyArr.splice(i,1);
    setToDos(copyArr);
}
    return (
      <div>
        <h1>to do list</h1>
        <input onChange={(e)=>{changeNewTask(e)}}/>
        <button onClick={()=>{addNewTask()}}>add new task</button>
        {toDos.map((elem,i)=>{
            return (
              <div key={i}>
                <p>
                  {elem} <button onClick={()=>{deleteItem(i)}}>delete</button>
                </p>
              </div>
            );
        })}
      </div>
    );
}
