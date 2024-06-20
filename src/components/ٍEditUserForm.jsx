import { useParams,useNavigate} from "react-router-dom";
import { selectUserById, userEdited } from "../reducers/usersSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const EditUserForm = () =>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {userId}=useParams();
    const user = useSelector((state)=>selectUserById(state,userId)
    )
    console.log(user)
    const[title,setTitle]=useState(user.title)
    const[name,setName]=useState(user.name)
    const handleTitleChange =(e)=>{
        setTitle(e.target.value)
    }
    const handleNameChange =(e)=>{
        setName(e.target.value)
    }
    const handleFormSubmit=()=>{
        if(title&&name){
            dispatch(userEdited({id:userId,title,name}))
            navigate(`/users/${userId}`)
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
export default EditUserForm;