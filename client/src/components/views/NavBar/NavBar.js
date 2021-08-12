import React from 'react'
import { Navbar, Container, Nav, Carousel } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'
import {Image} from 'antd';
import './NavBar.scss'

function NavBar() {
    return (
        <>
          {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Soo zip</Navbar.Brand>
          <Link to="/upload" className="navButton">Upload</Link>
          <Link to="/sneakers" className="navButton">Sneakers</Link>
          <Link to="/etc" className="navButton">Etc</Link>
          <Link to="/figures" className="navButton">Figures</Link>
          <Link to="/feedback" style={{fontColor:'white'}}>Feedback</Link>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar
