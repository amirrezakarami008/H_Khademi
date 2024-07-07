import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import "./Designed.css";
import { FaArrowLeft, FaGithub, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
function DesighnedItem({
  name,
  image ,
  position,
  github,
  instagram,
  telegram,
  phone,
  text,
}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      برگشت به سایت
    </Tooltip>
  );
  return (
    <>
      <Col sm="12" md="4" className="my-1">
        <Card>
          <Card.Img
          className="img-size"
            variant="top"
            src={image}
            alt="طراحان و توسعه دهندگان سایت"
          />
          <Card.Body id="card-body">
            <Card.Title className="text-center m-auto py-4 fw-bold">
              {name} :{" "}
              <span className="text-info Cairo fw-bold">{position}</span>
            </Card.Title>
            <Card.Text className="text-justify">{text}</Card.Text>
            <Row className="d-flex align-items-center justify-content-center">
              <Col sm="12" className="text-center mt-4">
                <Col>
                  <span className="me-2">
                    <Link to={github}>
                      <FaGithub size="20px" color="#BDE8EE" />
                    </Link>
                  </span>
                  <span className="me-2">
                    <Link to={instagram}>
                      <FaInstagram size="20px" color="#BDE8EE" />
                    </Link>
                  </span>
                  <span className="me-2">
                    <Link to={telegram}>
                      <FaTelegram size="20px" color="#BDE8EE" />
                    </Link>
                  </span>
                  <span className="me-2">
                    <Link to={phone}>
                      <FaPhone size="20px" color="#BDE8EE" />
                    </Link>
                  </span>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button variant="">
                    <Link to="/">
                      <FaArrowLeft size="20px" color="#BDE8EE" />
                    </Link>
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default DesighnedItem;
