import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import imagemanager from "../../../assets/images/imageManager.png";
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import "./Section6.css";
import Aos from "aos";
function Section6() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="section-6"  >
      <Container className="container-section6">
        <Row className="align-items-center border-section6 mt-5">
          <Col lg={6} data-aos="fade-left" data-aos-duration="1000">
            <div>
              <h2>
                <FaQuoteRight className="ms-2" size="25px" color="#346ed190" />
                سخنی از مدیر <span className="txt-color">هنرستان</span>
                <FaQuoteLeft className="ms-2" size="25px" color="#346ed190" />
              </h2>
              <p className="text-justify">
                <b>تلاش</b> کنید همیشه به عنوان یک <b>دانش‌آموز</b> بمانید و از
                هر فرصتی برای یادگیری بهره ببرید. به عنوان یک معلم، به دیگران با
                احترام و صداقت ، آموزش دهید تا بهترین نتیجه را به دست آورید. هر
                دو فعالیت اموزش دادن و اموزش دیدن به شما ارتباط انسانی تازه‌ای
                با دیگران ارائه خواهد داد. اموزش دادن و اموزش دیدن دو فعالیت
                بسیار ارزشمند هستند که می‌توانند به شما کمک کنند تا در زندگی
                شخصی و حرفه‌ای خود <b>پیشرفت </b>
                کنید. به خوبی از این دو فرصت استفاده کنید و هر روز یک قدم
                بزرگ‌تر به سوی بهبود و پیشرفت بردارید.
              </p>
              <button onClick={handleShow} className="btn-section6 bg-green">
                ارتباط با من
              </button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>شماره تماس مدیر هنرستان</Modal.Title>
              </Modal.Header>
              <Modal.Body className="fs-4">09131577844 جلیل رفیعی</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  بستن
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col lg={6} className="none-sm" data-aos="fade-right" data-aos-duration="1000">
            <img src={imagemanager} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section6;
