import { Col, Row, Container } from "react-bootstrap";
import "./CardLoading.css";
function CardLoading() {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12" md="6" lg="4">
            <span class="loader"></span>
          </Col>
          <Col sm="12" md="6" lg="4">
            <span class="loader"></span>
          </Col>
          <Col sm="12" md="6" lg="4">
            <span class="loader"></span>
          </Col>
          <Col sm="12" md="6" lg="4">
            <span class="loader"></span>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CardLoading;
