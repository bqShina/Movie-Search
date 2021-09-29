import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SimpleLineIcon from 'react-simple-line-icons';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';



export const Navigation = () => {
    return (
        <header className="header">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="text-start">
                        <img src="https://klbtheme.com/movify/wp-content/uploads/2018/04/logo.png" height="38" alt="Movify – Movies &amp" />
                        {/* <img src="https://klbtheme.com/movify/wp-content/uploads/2018/04/logo-white.png" alt="Movify – Movies &amp; Cinema WordPress Theme" className="logo-white" /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto custom-item">
                                <Nav.Link href="https://bqshina.github.io/My-Portfolio/" className="nav-item-link">Home</Nav.Link>                                

                                <NavDropdown title="Pages" id="basic-nav-dropdown" className="nav-item-link">
                                    <NavDropdown.Item href="#">404 Page</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Coming soon</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Price Plan</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Login – Register</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
                                </NavDropdown>
                                
                                <NavDropdown title="Movies & TV Shows" id="basic-nav-dropdown" className="nav-item-link">
                                    <NavDropdown.Item href="#">Movie List 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Movie List 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Movie Grid 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Movie Grid 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Movie Grid 3</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Movie Grid 4</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Movie Detail</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Movie Detail 2</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Blog" id="basic-nav-dropdown" className="nav-item-link">
                                    <NavDropdown.Item href="#">Blog List</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Post With Gallery</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Post With Vimeo</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Post With Youtube</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Post With Audio</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#" className="nav-item-link">Contact Us</Nav.Link>
                            </Nav>

                            <Nav className="navbar-end text-end">
                                <Nav.Link href="#"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                                <Nav.Link href="#"><Button className="login-btn"><SimpleLineIcon name="user" size="Small"/><span className="login-text">LOGIN</span></Button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        
                </Container>
            </Navbar>         
        </header>
    )
}
