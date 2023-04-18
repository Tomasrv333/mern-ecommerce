import React, { useState, useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className='close-icon'>
                <FaTimes onClick={toggleSidebar}/>
            </div>
            <div className='content'>
                <a>Settings</a>
            </div>
        </div>

    )
}

export default Sidebar