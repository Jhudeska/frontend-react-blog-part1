import './Navbar.css'
import {NavLink} from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <NavLink to="/">Logo</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Blogposts</NavLink>
            <NavLink to="/new">Nieuwe post</NavLink>
            <NavLink to="/about">Over ons</NavLink>
        </nav>
    )
}

export default Navbar;