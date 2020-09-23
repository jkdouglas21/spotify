import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import NavBar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import spotify_logo from '../images/spotify_logo.png'

function Menu() {
    return(
        <NavBar style={{backgroundColor: 'black', position: 'fixed', width: '100%', top: 0}}>
            <NavBar.Brand>
                <Link to="/" style={{color: "white", textDecoration: 'none'}}>
                  <img src={spotify_logo} />
                </Link>
            </NavBar.Brand>
            <NavBar.Brand style={{color: 'white', marginLeft: 'auto'}}>
                <Link to="/ajuda" style={{color: "white", textDecoration: 'none'}}> Ajuda </Link>
            </NavBar.Brand>
        </NavBar>
    )
}

export default Menu