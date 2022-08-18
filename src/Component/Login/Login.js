import React,{useState} from 'react'
import "./Login.css"
import { ImCheckmark2 } from "react-icons/im"
// import { Login } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate=useNavigate();
    const [name,setName]=useState("");
    let currentUser=localStorage.todoUser;
    React.useEffect(()=>{
        if(currentUser){
            navigate("/todo");
        }
    },[])
    const submit=()=>{
        if(name){
            localStorage.todoUser=JSON.stringify(name);
            navigate("/todo")

            return
        }
        toast.error("please enter your name ")
    }
    return (
        <section className='login'>
            <div className='main'>
                <input className='form-control' value={name} onChange={(e)=>setName(e.target.value)} maxLength={8} type="text" placeholder='your name' />
                <button className='btn' onClick={submit}><ImCheckmark2 /></button>
            </div>

        <ToastContainer/>
        </section >
    )
}

export default Login