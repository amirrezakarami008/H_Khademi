import { Link } from "react-router-dom";
import "./Teachers.css";
import { Col, Card, CardFooter } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

function TeachersItem({ image_id, name, field }) {
  return (
    <Col sm={12} md={6} lg={3}>
      <Card className="my-3 card-hover">
        <Card.Img
          variant="top"
          src={`https://khademi.liara.run/${image_id}`}
          className="img-fluid"
          style={{ aspectRatio: "3/2", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>
            <p>
              دبیر : <b> {field} </b>
            </p>
          </Card.Text>
        </Card.Body>
        <CardFooter className="card-footer-teacher">
          <div className="d-flex justify-content-between align-items-start">
            <span className="margin-er">راه های ارتباطی</span>
            <div className="d-flex">
              <Link
                to={"https://web.eitaa.com/#@mahdi_poker"}
                className="app-color"
                target="blank"
              >
                <img
                  src="https://web.eitaa.com/assets/img/apple-touch-icon.png?v=jw3mK7G9Ry"
                  alt=""
                  className="eitta-style"
                />
              </Link>
              <Link className="app-color" target="blank">
                <FaPhoneAlt className="fs-4 phone-hover" />
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Col>
  );
}
export default TeachersItem;
