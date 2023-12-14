import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const navbarStyle = {
    background: 'linear-gradient(to right, #ff5757, #8c52ff)'
    
  };
  return (
    <div style={navbarStyle}>
      <Navbar    className="barraInfo">
        <Container>
          <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/" >
            <Navbar.Brand style={{ color: "white" }}>
            <i className= 'fa-solid fa-paw' style={{color: '#fafafa;'}}></i> PETCONNECT
            </Navbar.Brand>
          </NavLink>
          <Nav className="me-3">
            <NavLink to="/Perfil">
              <Navbar.Brand className={({ isActive }) => (isActive ? "active" : undefined)} style={{ color: "white" }}> Perfil </Navbar.Brand>
            </NavLink>
            <NavLink to="/Registro">
              <Navbar.Brand className={({ isActive }) => (isActive ? "active" : undefined)} style={{ color: "white" }}> Registrar </Navbar.Brand>
            </NavLink>            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
