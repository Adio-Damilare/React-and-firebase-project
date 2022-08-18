import React, { useState } from 'react'
import { onSnapshot,query,collection,updateDoc,deleteDoc, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../App-config/firbase';
import Todo from '../Todo';
import "./Todos.css"

const Todos = ({ setEditBtn,postToEdit}) => {
    let currentUser=JSON.parse(localStorage.todoUser)
    const [TodosArr,setTodoArr]=useState([]);
    const fetchTodos=()=>{
        const q=query(collection(db,currentUser));
        const getSnapshot=onSnapshot(q,(querySnapshot)=>{
            let todoArr=[];
            querySnapshot.forEach((doc)=>{
                todoArr.push({...doc.data(),id:doc.id})

            })
            setTodoArr(todoArr)
        })
    }
    React.useEffect(()=>{
        fetchTodos();
    },[])
  return (
    <div id='further'>
        <h2 className='text-center'>TODOs</h2>
        { TodosArr.length<=0?( <div id='loading'>Loading.....</div>): TodosArr.map((todo)=>(
            <Todo key={todo.id} setEditBtn={setEditBtn} todo={todo} postToEdit={postToEdit}/>
        ))}
    </div>
  )
}

export default Todos