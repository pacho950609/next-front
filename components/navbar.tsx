import { Navbar, Container, Nav } from 'react-bootstrap';
import { useUser } from '../hooks/useUser';

export const NavbarL = () => {  
    const { user, logOut } = useUser();
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"> App </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> </Nav>
          <Nav>
            <Nav.Link hidden={user && !user?.email} onClick={() => logOut()}> Log out </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };