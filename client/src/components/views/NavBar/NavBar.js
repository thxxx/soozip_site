import React from 'react'
import { Navbar, Container, Nav, Carousel } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
          {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">수 집</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Nav.Link href="/sneakers">Sneakers</Nav.Link>
          <Nav.Link href="/feedback">Feedback</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar
