import "./Contact.css";
import Header from "../../components/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import ContactItems from "./ContactItems";
import Footer from "../../components/footer/Footer";
import Map from "../Map/Map"
import { Link } from "react-router-dom";
function Contact() {
  let Items1 = [
    {
      icon: "fs-5 fa-solid color-green fa-phone-volume",
      title: "شماره هنرستان :",
      phone: "7013-3621-035",
      hrefphone: "tel:+03536217013",
    },
    {
      icon: "fs-5 fa-solid color-green fa-phone-volume",
      title: "شماره امور مالی :",
      phone: "7013-3621-035",
      hrefphone: "tel:+03536217013",
    },
    {
      icon: "fs-5 fa-solid color-green fa-phone-volume",
      title: "مدیر هنرستان (جلیل رفیعی) :",
      phone: "7013-3621-035",
      hrefphone: "tel:+03536217013",
    },
  ];

  let Items2 = [
    {
      icon: "fs-5 fa-solid color-green me-2 fa-phone-volume",
      title: "معاون اموزشی (حمید انتظاری) :",
      phone: "7013-3621-035",
      hrefphone: "tel:+03536217013",
    },
    {
      icon: "fs-5 fa-solid color-green me-2 fa-phone-volume",
      title: "معاون پرورشی (محسن شاه محمدی) :",
      phone: "7013-3621-035",
      hrefphone: "tel:+03536217013",
    },
    {
      icon: "fs-5 fa-solid color-green me-2 fa-phone-volume",
      title: "معاون فنی (جلال دهقان) :",
      phone: "7013-3621-035",
      hrefphone: "tel:+03536217013",
    },
  ];
  return (
    <div>
      <Header />
      <Container>
        <div className="Contact mt-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="PhoneNumber my-4 p-3">
                <div className="footer-body">
                  <h3 className="fw-bold mb-3 color-red">
                    راه های ارتباط با هنرستان
                  </h3>
                  {Items1.map((item) => (
                    <ContactItems {...item} />
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              {Items2.map((item2) => (
                <ContactItems {...item2} />
              ))}
            </Col>
          </Row>
        </div>

        <Row>
          <Col>
            <div class="map">
              <Link
                to={
                  "https://www.google.com/maps/place/%D9%87%D9%86%D8%B1%D8%B3%D8%AA%D8%A7%D9%86+%D9%86%D9%85%D9%88%D9%86%D9%87+%D8%AE%D8%A7%D8%AF%D9%85%DB%8C+%D9%85%D8%AC%D9%88%D9%85%D8%B1%D8%AF%E2%80%AD/@32.0275375,54.1955345,17z/data=!3m1!4b1!4m6!3m5!1s0x3fa6733468f3402d:0x401243575bc974c3!8m2!3d32.0275375!4d54.1981094!16s%2Fg%2F1ptx_vh5v?entry=ttu"
                }
              >
                <Map />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Contact;
