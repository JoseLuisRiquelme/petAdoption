import { Card, Col, Row } from "react-bootstrap";

function Perfil() {
  return (
    <div className="tarjetaPerfil">

      <Card style={{ width: "35rem", height: "20rem" }}>
        <Row>
          <Col>
            <Card.Img style={{ maxHeight: '16rem',  }}  src="https://m.media-amazon.com/images/M/MV5BMTI2MjQ4MDIxNV5BMl5BanBnXkFtZTcwNzQxNTEzMg@@._V1_FMjpg_UX1000_.jpg" />
          </Col>
          <Col>
            <Card.Body style={{ textAlign: 'left' }}>
              <Card.Title>Chris Martin</Card.Title>
              <Card.Text>Amo a los Perros
                <p><i className="fa-solid fa-location-dot" style={{ color: "#7a6bbc" }}></i> 123 Anywhere St., Any City</p>
                <p><i className="fa-solid fa-envelope" style={{ color: "#7a6bbc" }}></i> chrislovepets@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <button className="form__button text-white px-10 py-2 rounded-md"><strong>Editar Perfil</strong></button>
    </div>
  );
}

export default Perfil;