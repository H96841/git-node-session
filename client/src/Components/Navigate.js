import{Link, useNavigate} from "react-router-dom"
import{useSelector , useDispatch}from "react-redux"
import{clearToken}from "../Features/auth/authSlice"

const Navigate=()=>{
const {isUserLoggedIn }=useSelector((state=>state.auth))
const dispatch=useDispatch()
const navigate=useNavigate()

// const goToBlog = () => {
//     navigate('/')
// }

const handlLogout=()=>{
    dispatch(clearToken())
    navigate("/login")
}

    return(
<nav className="navbar">
 <div className="logo">MonoLines <br></br><div className="miniLogo">Minimal ink.Maxsimum meaninig</div></div>
<div className="nav-links">
<Link to="/">Home page</Link>
<Link to="/galery">galery</Link>
<Link to="/blog">blog</Link>
<Link to="/login">Login</Link>
<Link to="/register">register</Link>
{/* {!isUserLoggedIn&&<Link to="/login">Login</Link>}
{!isUserLoggedIn&&<Link to="/register">register</Link>} */}
{!isUserLoggedIn&&<a onClick={handlLogout}>Logout</a>}
</div>
</nav>
    )
}
export default Navigate