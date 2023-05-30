import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={'https://t3.ftcdn.net/jpg/03/02/36/78/360_F_302367825_q15EfpDyyvhal2xrzEL75a8I7yxymcBT.jpg'} alt="Logo" height='60px' style={{borderRadius: "20%"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon fa-lg btn-floating">
            <a href="https://github.com/jeffreyli0312"><img src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} alt="Github" className='test'/></a>
            <a href="https://www.linkedin.com/in/jeffreyli0312/"><img src={'https://cdn-icons-png.flaticon.com/512/174/174857.png'} alt="LinkedIn" className='test'/></a>
            <a href="mailto:j2662li@uwaterloo.com"><img src={'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png'} alt="Email" className='test'/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;