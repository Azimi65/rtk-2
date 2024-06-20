import { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAdded } from "../reducers/usersSlice";
import {nanoid} from "@reduxjs/toolkit"
const createUserForm=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[title,setTitle]=useState("");
    const[name,setName]=useState("")
    const handleTitleChange = (e)=>{
    setTitle(e.target.value)
    } 
    const handleNameChange = (e)=>{
        setName(e.target.value)
        }  
        const handleFormSubmit=()=>{
            if(title&& name){
                dispatch(userAdded(title,name))
                setTitle("")
                setName("")
                navigate("/")
            }
        }   
    return(
        <form>
            <label htmlFor="">عنوان کاربر</label>
            <input type="text" value={title} onChange={handleTitleChange}/>
            <label htmlFor="">نام و نام خانوادگی</label>
            <input type="text" value={name} onChange={handleNameChange}/>
            <button type="button" onClick={handleFormSubmit}>ثبت کاربر</button>
        </form>
     )
}
export default createUserForm;