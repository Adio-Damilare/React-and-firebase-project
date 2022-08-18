import React ,{useState}from 'react'
import { db } from '../../App-config/firbase';
import { collection, addDoc ,updateDoc,doc} from "firebase/firestore";
import "./AddTodo.css"
import { FaUpload } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todos from '../Todos/Todos';
import {MdEdit} from "react-icons/md"
// import { async } from '@firebase/util';

const AddTodo = () => {
    const navigate=useNavigate();
    const [editBtn,setEditBtn]=useState(false)
    const [editId,setEditId]=useState()
    let currentUser=JSON.parse(localStorage.todoUser)
    React.useEffect(()=>{
        if(!localStorage.todoUser){
        navigate("/")
        }

    },[])
    const [todo, setTodo] = React.useState("");
    const submit = async () => {
        if(!editBtn){
            if (todo) {
                await addDoc(collection(db, currentUser), {
                    todo,
                  complete: false,
                })
                setTodo("")
                toast.success("Task succesful added")
                return
            }
            toast.error("please add your task")
        }else{
            if(editId){
                await updateDoc(doc(db,currentUser,editId),{todo});
                toast.success("You have successful edit ")
                setEditBtn(false);
                setTodo("");

            }

        }

    }
    const postToEdit=(e)=>{
        setTodo(e.todo)
        setEditId(e.id)
        console.log(e.id)

    }

    return (
        < div id='container'> 
        <section className='section'>
            <div className='main'>
                <header className='header'> TODO APP</header>
                <div className='d-flex jug'>
                    <input type="text" className='form-control' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Add Task here' />
                    <button className='btn button' onClick={submit}>{ editBtn?<MdEdit/>:<FaUpload />}</button>
                </div>
            </div>
            <ToastContainer />
        </section>
                <Todos  setEditBtn={setEditBtn} postToEdit={postToEdit}/>
        </div>
    )
}

export default AddTodo