import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <Link to="/">Logo</Link>
            <Link to="/">Home</Link>
            <Link to="/posts">Blogposts</Link>
            <Link to="/new">Nieuwe post</Link>
            <Link to="/about">Over ons</Link>
        </nav>
    )
}

export default Navbar;