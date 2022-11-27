import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar className="sticky-top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Animal Pics App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#cats">Cats</Nav.Link>
            <Nav.Link href="#dogs">Dogs</Nav.Link>
            <Nav.Link href="#savedPics">Saved Pics</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;