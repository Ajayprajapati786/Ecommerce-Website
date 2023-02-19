import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce App</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <p className='text-muted' style={{marginTop:'15px', border:'2px solid skyblue', padding:'5px', borderRadius:'5px'}}>Cart <span className='text-primary'><sup>1</sup></span></p>
        </Container>
      </Navbar>
    
      
    </>
  );
}

export default Header;