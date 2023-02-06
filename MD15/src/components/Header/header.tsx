import { NavLink } from "react-router-dom";
import './header.css'
import logo from './logo.png';

const Header = (() =>{
    return (
    <div className="header">
        <span className="navLink__wrapper">
           <NavLink className="navLink" to={'/'}>Home</NavLink>
           <NavLink className="navLink" to={'/characters'}>Character</NavLink>
           <NavLink className="navLink" to={'/about'}>About</NavLink>
        </span>
    </div>
    )
})

export default Header;