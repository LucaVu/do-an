import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from '../../data/sample.json';

function NavbarComponent () {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>

                    <Nav className="me-auto">
                        {
                            data.menu.map((item, key) => (
                                <Nav.Link key={item.id} href={item.link}>{item.name}</Nav.Link>
                            )) 
                        }
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
        
    )
}

export default NavbarComponent