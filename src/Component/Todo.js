import React from 'react'
import { MdDelete } from "react-icons/md"
import { MdModeEditOutline } from "react-icons/md";
import "./todo.css"
import { db } from '../App-config/firbase';
import {doc,updateDoc,deleteDoc} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = ({ todo, setEditBtn ,postToEdit }) => {
let token=JSON.parse(localStorage.todoUser)
  console.log(todo.todo.length)
  const Edit=(e)=>{
     setEditBtn(true)
     postToEdit(e)
  } 
  const Delete= async (e)=>{
    await deleteDoc(doc(db,token,e.id))
    toast.success("Todo is delete succeessful")

  }
  return (
    <section className='todo'>
      {todo.complete ? (<input type="checkbox" className='form-check-input' checked />) : (<input type="checkbox" className='form-check-input' />)}
      <p className='text-dark' style={{fontSize:"25px"}}>{todo.todo.length>8?<p>{todo.todo.substring(0,20)}.... <i style={{cursor:"pointer"}}>see more</i></p>:todo.todo}</p>
      <button className='btn ' id='edit' onClick={()=>Edit(todo)}><MdModeEditOutline/></button>
      <button className='btn ' id='delete' onClick={()=>Delete(todo)}><MdDelete/></button>
      <ToastContainer/>
    </section>
  )
}

export default Todo