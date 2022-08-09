import React from 'react'
import { Navbar, Container, Nav, Form, NavDropdown } from 'react-bootstrap'
import logoShadow from '../Assets/images/nav-logo-shadow.png'
import oramaLogo from '../Assets/images/orama-logo.png'

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <img src={logoShadow} alt="" style={{width: '80px', height: '80px'}} />
                <Container>
                    <Navbar.Brand href="#"><img src={oramaLogo} alt="" style={{height: '70px'}} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#action1">HOME</Nav.Link>
                        <Nav.Link href="#action2">ABOUT</Nav.Link>
                        <Nav.Link href="#action2">SERVICES</Nav.Link>
                            <NavDropdown title="OUR WORK" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3" className='dropdown-menu'>UI/UX Designing</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className='dropdown-menu'>SEO & Content Writing</NavDropdown.Item>
                                <NavDropdown.Item href="#action5" className='dropdown-menu'>App Development</NavDropdown.Item>
                                <NavDropdown.Item href="#action5" className='dropdown-menu'>Digital Marketing</NavDropdown.Item>
                                <NavDropdown.Item href="#action5" className='dropdown-menu'>Graphic Design</NavDropdown.Item>
                                <NavDropdown.Item href="#action5" className='dropdown-menu'>Website Development</NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Link href="#action2">BLOG</Nav.Link>
                        <Nav.Link href="#action2">CONTACT</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <div className='phone-num'>
                            <p>Phone Services</p>
                            <p>+1 (470) 355-3442</p>
                        </div>
                        <a href=""><div className='call-us'><i className="fa-solid fa-phone-volume"></i></div></a>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar