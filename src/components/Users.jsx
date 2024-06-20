import {useSelector} from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { selectAllUsers } from "../reducers/usersSlice";

const Users=()=>{   
    const navigate=useNavigate()
    const allusers=useSelector(selectAllUsers)
    const renderedUsers=allusers.map(user=>(
        <section key={user.id}>
            <h2>{user.title}</h2>
            <p>{user.content}</p>
            <Link to={`/users/${user.id}`}   className="accent-button button">مشاهده کاربر</Link>
        </section>
    ));

    return(
        <>
        <button className="accent-button full-button" type="button" onClick={()=>navigate("/users/create-user")}>ساخت کاربر جدید</button>
        {renderedUsers}
        </>
    )
}
export default Users;