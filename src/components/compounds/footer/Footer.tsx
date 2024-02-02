//footer 
import React from 'react';
import './Footer.css';

import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return(
        <footer>
            <div id = "footer-logo">
                <h1>
                    <Link to = "/" className='link'><b>Marcos Garcia</b></Link>
                </h1>
            </div>
            <div className = "footer-row" id = "footer">
                <div className = "footer-column" id = "footer-menu">
                    {/* <h3>Links</h3>
                    <ul>
                    <li><Link to="/projects/">Projects</Link></li>
                    <li><Link to="/work-experience">Work Experience</Link></li>
                    <li><Link to="/resume">Resumé</Link></li>
                    <li><Link to="/hobbies">Hobbies</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>  
                    <li><Link to="/contact">Contact</Link></li>
                    </ul> */}
                </div>
                <div className = "footer-column">
                    <p>Based in San Jose, CA<br />+1 (408) 823-8539<br />marcos.garcia5667@gmail.com<br />(Willing to relocate!)</p>
                </div>
                <div className = "footer-column" id = "footer-socials-menu">
                    <h3>Socials</h3>
                    <li><a href = "https://github.com/MarcosG119">Github</a></li>
                    <li><a href = "https://www.linkedin.com/in/marcos-garcia-bb3125161/">LinkedIn</a></li>
                </div>
                
            </div>

   </footer>
    );
}

export default Footer;