//header
import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


const Header: React.FC = () => {
    
    return (
        <header className='Header'> 
            {
            //logo
            }
            <div id = "top-bar" className="header">
                <h1 className="header-h1"><Link to="/"><b>Marcos Garcia<br /></b></Link></h1>
            </div>
            
            {/** Nav Menu */}
            <div id="menu">
                <ul>                                   

                    <li><Link to="/projects/">Projects</Link></li>
                    <li><Link to="/work-experience">Work Experience</Link></li>
                    <li><Link to="/resume">Resumé</Link></li>
                    <li><Link to="/hobbies">Hobbies</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>  
                    <li><Link to="/contact">Contact</Link></li>
                </ul> 
            </div>
            <br />

        </header>
    );
}

export default Header;