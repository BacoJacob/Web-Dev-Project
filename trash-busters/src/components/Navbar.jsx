import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>TrashBusters</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#cleanupSites">Cleanup Sites</Nav.Link>
            <Nav.Link href="#newCleanupSite">New Cleanup Site</Nav.Link>
            <Nav.Link href="#deleteCleanupSite">Delete Cleanup Site</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;