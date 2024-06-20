import { createSlice,createAsyncThunk ,nanoid} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
// import { createEntityAdapter } from "@reduxjs/toolkit";
// const usersAdaptor = createEntityAdapter();
// const initialState = usersAdaptor.getInitialState({
//       status:"idle"
// });
const initialState={
    users:[
    {
        id:nanoid(),
        title:"اولین کاربر",
        name:"سمیرا حسن زاده"
    },
    {
        id:nanoid(),
        title:"دومین کاربر",
        name:" حسن اکبری"
    }
]
}
const UsersSlice=createSlice({
    name:"Users",
    initialState:initialState,
    reducers:{
        userAdded:{
           reducer:(state,action)=>{
                state.users.push(action.payload)
           },
           prepare:(title,name)=>{
            return{
                payload:{
                    id:nanoid(),
                    title,
                    name
                }
            }
           }
        },
        userEdited:(state,action)=>{
            const {id,title,name}=action.payload;
            const existingUser=state.users.find(user=>user.id===id);
            if(existingUser){
                existingUser.title=title;
                existingUser.name=name;
            }
        },
        userDeleted:(state,action)=>{
            const {id}=action.payload;
            state=state.users.filter(user=>user.id===id)
        }
    },

});
// export const {selectAll:selectAllUsers,selectById}=usersAdaptor.getSelectors(state=>state.Users)
export const selectAllUsers=(state)=>state.Users.users;
export const selectUserById=(state,userId)=>(state.Users.users.find((user)=>user.id===userId))
export default UsersSlice.reducer; 
export const {userAdded,userEdited} = UsersSlice.actions;