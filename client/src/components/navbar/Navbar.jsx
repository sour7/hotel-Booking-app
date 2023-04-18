import { useContext } from "react";
import "./navbar.css"
import {Link, NavLink, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user} = useContext(AuthContext);
   const navigate= useNavigate()
  const handleClick = async () => {
  

  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/"style={{'color':'inherit', "textDecoration":"none"}}>
        <span className="logo">HotelBooking</span>
        </Link>
     {
      user ?
      <div className="navItems" style={{display:"flex" , gap:"10px"}}>
      <h4>{ user.details.username}</h4>
      
      <button onClick={handleClick}>Logout</button>
    
      </div>:
      <div className="navItems">
         <Link to="/register">
      <button className="navButton">Register</button></Link>
      <Link to="/login">
      <button className="navButton">Login</button>
      </Link>
    </div>
     }
      </div>
    </div>
  )
}

export default Navbar