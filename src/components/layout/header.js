import React from 'react'
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <header style={headerStyle}>
            <h1>Set 'em up & Knock 'em Down</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '30px 10px',
}

const linkStyle = {
   color: '#fff',
   textDecoration: 'none' 
}
