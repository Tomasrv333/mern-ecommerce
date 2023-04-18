import React, { useState, useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <FaTimes onClick={() => setIsOpen(false)}/>
        </div>

    )
}

export default Sidebar