import "./navbar.css"
import { Link } from "react-router-dom";
export default function Navbar(){
    return (
        <div className="navbar">
            <h2 className="nav-brand">ReactJS</h2>

            <Link className="nav-menu" to="/">HOME</Link>
            <Link className="nav-menu" to="/About">ABOUT</Link>
            <Link className="nav-menu" to="/Contact">CONTACT</Link>
        </div>
    )
}