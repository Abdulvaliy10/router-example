import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
       <div> 
        <button>
            <Link to="/about">About</Link>
        </button>
        <button>
            <Link to="/login">Login</Link>
         </button>
        <button>
            <Link to="/profile">Profile</Link> 
        </button>
        <button>
            <Link to="/example">Example</Link>
        </button>
        <button>
            <Link to="/FAQs">FAQs</Link>
         </button>
         <button>
            <Link to="/archieve">Archieve</Link>
        </button>
        <button>
            <Link to="/logout">Log out</Link>
         </button>
        </div>
    )
}

export default Navbar;