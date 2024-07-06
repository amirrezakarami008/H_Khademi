import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./Section4.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
function Section4Item({ CName, img, title, text, route }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Col md={12} lg={4} className="margin-sec4" data-aos="fade-left" data-aos-duration="1000">
      <div className="card-section4  d-sm-inline d-lg-flex">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front d-none  d-lg-block">
              <img
                src={img}
                alt="Avatar"
                className="img-fluid bg-cardS4 rounded-3"
              />
            </div>
            <div className="flip-card-back">
              <Card id="card-section-4">
                <Card.Body className="p-2">
                  <Card.Title className="text-green mt-3 text-center fw-bold">
                    {title}
                  </Card.Title>
                  <Card.Text className="p-3 text-dark">{text}</Card.Text>
                  <hr />
                  <Link
                    className="text-decoration-none"
                    target="blank"
                    to={route}
                  >
                    <Button id="btn-green" className={CName}>
                      اطلاعات بیشتر
                    </Button>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    target="blank"
                    to={"/teachers"}
                  >
                    <Button id="btn-green1" className={CName}>
                      هنرآموزان
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
export default Section4Item;
