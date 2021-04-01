import {React }from "react"
import "./Navbar.css"
import Logo from "./logo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BiMenuAltLeft} from "react-icons/bi";

const Navbar = ({ sticky }) => (
  <div class="navbar ">
 <Link to={'/home'} className="nav-link"><img src={Logo} alt="logo" className="navbar--logo" /></Link>
  <div class="dropdown">
  <BiMenuAltLeft style={{height:40,width:80,color:"white"}} class="dropbtn"></BiMenuAltLeft>
      <i class="fa fa-caret-down"></i>
    <div class="dropdown-content ">
    <Link to={'/home'}>Home</Link>
    <Link to={'/Works'}>Works</Link>
    <Link to={'/Services'}>Services</Link>
      <Link to={'/About'}>About</Link>
      <Link to={'/Stories'}>Stories</Link>
      <Link to={'/Careers'}>Careers</Link>
    </div>
  </div>
  
</div>

)

export default Navbar  

