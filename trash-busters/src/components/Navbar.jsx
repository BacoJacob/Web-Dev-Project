import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar className="sticky-top navbar" bg="primary" variant="dark">
        <Container className="d-flex">
          <Navbar.Brand className="flex-grow-1" style={{fontSize: 50}}>Animal Pics App</Navbar.Brand>
          <Nav style={{fontSize: 30}}>
            <Nav.Link href="#cats">Cats</Nav.Link>
            <Nav.Link href="#dogs">Dogs</Nav.Link>
            <Nav.Link href="#savedCatPics">Saved-Cat-Pics</Nav.Link>
            <Nav.Link href="#savedDogPics">Saved-Dog-Pics</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;