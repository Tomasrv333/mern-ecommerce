import React, { useState, useEffect, useRef } from 'react'
import { FaAngleRight, FaCog, FaReceipt } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className='close-icon'>
                <FaAngleRight onClick={toggleSidebar}/>
            </div>
            <div className='sidebar-content'>
                <div className='sidebar-item'>
                    <FaCog/>
                    <a>Settings</a>
                </div>
                <div className='sidebar-item'>
                    <FaReceipt/>
                    <a>Orders</a>
                </div>
                <div className='sidebar-item'>
                    <FaReceipt/>
                    <a>Logout</a>
                </div>
            </div>
        </div>

    )
}

export default Sidebar