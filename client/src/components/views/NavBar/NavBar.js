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
          <Link to="/">Home</Link>
          <Link to="/upload" className="navButton">Upload</Link>
          <Link to="/sneakers" style={{fontColor:'white'}}>Sneakers</Link>
          <Link to="/feedback" style={{fontColor:'white'}}>Feedback</Link>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar
