import { useParams,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "../reducers/usersSlice";

const User=()=>{
 const {userId}=useParams();
 const selecteduser=useSelector(state=>selectUserById(state,userId))
 if(!selecteduser){
    return(
        <div>چنین کاربری نداریم</div>
    )
 }
    return(
        <section>
            <Link to={'/users'} className="button">وبلاگ</Link>
            <h2>{selecteduser.title}</h2>
            <p>{selecteduser.name}</p>
            <Link to={`/editUser/${userId}`}>ویرایش پست</Link>
        </section>
    )
}
export default User;