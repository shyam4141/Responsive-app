import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { UseAuth } from '../contexts/AuthContext';

function Navbar({ userName, backToLogin }) {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar);
    const { userRole } = UseAuth();

    useEffect(() => {
        console.log("get user role in admin", userRole)
      }, [userRole])

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='custom-navbar'>
                <div className='navbar-container row'>
                    <div className='col-6'>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    </div>
              
                    <div className='col-6 role-area'>
                        Role: {userRole}
                    </div>
                </div>
                    
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <p className='user-name'>Welcome {userName}</p>
                            <Link to="#" className='menu-bar-close'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} >
                                        {item.icon}
                                        <span className='path'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        <div className="log-out">
                            <button className='btn btn-danger' onClick={backToLogin}>Logout</button>
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
