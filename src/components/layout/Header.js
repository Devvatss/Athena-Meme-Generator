import React from 'react';
import logo from '../../../src/logo/logo.png';

function Header() {
    const headerStyle = {
        fontSize: "2em",
        textAlign: "center",
        display: "flex",
        padding: "40px",
        marginBottom: "24px",
        backgroundImage: "linear-gradient(to right, #3A1D74 , #0096FF)",
        color: "#3A1D74",
        textShadow: "4px 4px 4px #0096FF",
        justifyContent: "center",
        flexWrap: "wrap",
    }
    return (
        <header style={headerStyle}>
            <img src={logo} alt={logo}
            style={{
                display: "flex",
                width: "6em",
                
            }}/>
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header;
