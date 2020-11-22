import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {links, social} from './data'
import logo512 from './logo512.png'


const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false)
    return(
    <nav>
        <div className="nav-container">
            <div className="header">
                <img src={logo512} alt="logo" />
                
                <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                    <FaBars />
                </button>
            </div>
            <div className={`${showLinks ? "links-container show-container" : "links-container"} `}>
                <ul className="links">
                    {links.map(link => {
                        const {id, url, text} = link
                        return (
                        <li key={id}>
                            <a href="#">{text}</a>
                        </li>)
                    })}
                </ul>
            </div>
            <ul className="social-links">
                {social.map(social => {
                    const {id, icon, url} = social
                    return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>
                    )
                })}
            </ul>
        </div>
    </nav>
    )
}
export default NavBar