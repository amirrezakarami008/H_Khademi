import { Col, Container, Row } from "react-bootstrap";
import "./NotFound.css";
import Image from "../../assets/images/404.jpg";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="NotFound">
      <Container>
      <Row>
        <Col sm = {12}>
          <div>
            <img src={Image} className="img-fluid img-404" alt=""/>
          </div>
        </Col>
        <Col sm = {12}>
          <div className="d-block d-lg-flex align-items-center justify-content-center">
            <h2 className="mx-5">
              صفحه مورد نظر{" "}
              <span className="color">یافت</span> نشد
            </h2>
            <Link to='/'><button className="btn-404 mt-3 mt-lg-0">بازگشت به صفحه اصلی</button></Link>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}
export default NotFound;
