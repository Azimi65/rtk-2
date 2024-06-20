import { Link } from "react-router-dom"
export default function App() {
 
  return (
    <div style={{marginTop:"400px"}}>
      <Link to={"/users"}>کاربران</Link>
    </div>
  )
}