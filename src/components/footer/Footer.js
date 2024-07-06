import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import FooterItemsR from "./FooterItemsR";
import FooterL from "./FooterL";
import { Link } from "react-router-dom";
import { FaCopyright, FaPhoneAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  FaLocationDot,
  FaPhoneFlip,
  FaRegNewspaper,
  FaSchoolCircleCheck,
} from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";
import { MdPermContactCalendar } from "react-icons/md";
function Footer() {
  const ItemsR = [
    {
      id: 1,
      icon: <FaPhoneFlip size={"25px"} className="icon-color" />,
      desc: "شماره هنرستان :",
      hrefPhone: "tel:+03536217013",
      phone: "36217013-035",
    },
    {
      id: 2,
      icon: <FaPhoneFlip size={"25px"} className="icon-color" />,
      desc: "شماره امور مالی :",
      hrefPhone: "tel:+36215478-035",
      phone: "36215478-035",
    },
    {
      id: 3,
      icon: <FaLocationDot size={"25px"} className="icon-color" />,
      desc: "آدرس : یزد ، رضوانشهر ، بعد میدان صاحب الزمان",
    },
  ];
  const ItemsL = [
    {
      id: 1,
      icon: <FaRegNewspaper size={"25px"} className="icon-color" />,
      desc: "اخبار و اطلاعیه",
      href: "/news/",
    },
    {
      id: 2,
      icon: <SlPicture size={"25px"} className="icon-color" />,
      desc: "گالری تصاویر",
      href: "/album",
    },
    {
      id: 3,
      icon: <FaSchoolCircleCheck size={"25px"} className="icon-color" />,
      desc: "پیش ثبت نام",
      href: "/registration",
    },
    {
      id: 4,
      icon: <MdPermContactCalendar size={"25px"} className="icon-color" />,
      desc: "درباره هنرستان",
      href: "/aboutus",
    },
    // {
    //   id: 1,
    //   icon: "icon-color fs-5 bi bi-ui-checks-grid",
    //   desc: "اتوماسیون حضور غیاب",
    //   href: "",
    // },
    // {
    //   id: 2,
    //   icon: "icon-color fs-5 bi bi-clipboard2-check-fill",
    //   desc: "نمره دهی",
    //   href: "",
    // },
  ];
  return (
    <div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#346ed1ba"
            fillOpacity="1"
            d="M0,192L60,208C120,224,240,256,360,240C480,224,600,160,720,160C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footer">
        <Container>
          <Row className="align-items-start justify-content-around">
            <Col lg={4} className="mt-3">
              <div className="footer-body">
                <h3 className="fw-bold opacity-75 py-2">
                  <FaQuoteRight className="me-2" size="25px" color="#dcd9d9" />
                  راه های ارتباط با هنرستان
                  <FaQuoteLeft className="me-2" size="25px" color="#dcd9d9" />
                </h3>
                {ItemsR.map((item) => (
                  <FooterItemsR key={item.id} {...item} />
                ))}
              </div>
            </Col>
            <Col lg={4} className="mt-3 ">
              <div className="footer-body  mt-3 mt-lg-0">
                <h3 className="fw-bold opacity-75 py-2">
                  <FaQuoteRight className="me-2" size="25px" color="#dcd9d9" />
                  دسترسی سریع
                  <FaQuoteLeft className="me-2" size="25px" color="#dcd9d9" />
                </h3>
                {ItemsL.map((itemL) => (
                  <FooterL key={itemL.id} {...itemL} />
                ))}
              </div>
            </Col>
          </Row>
          <hr className="text-white text-opacity-75 pt-2" />
          <Row className=" align-items-center py-2">
            <Col lg={3} className="d-flex justify-content-center my-2">
              <Link
                className="text-white text-decoration-none "
                to="/designed&support"
              >
                <p className="d-inline border-b">طراحی و پشتیبانی</p>
              </Link>
            </Col>
            <Col
              lg={6}
              className=" d-flex text-white my-2 justify-content-center text-center"
            >
              <FaCopyright size="20px" color="#fff" className="me-1" />
              <span className="fs-">
                تمامی حقوق برای هنرستان نمونه دولتی خادمی محفوط است.
              </span>
            </Col>
            <Col
              lg={3}
              className="text-end d-flex text-white my-2 justify-content-center"
            >
              <div className="d-flex">
              <Link
                to={"https://web.eitaa.com/#-19234579"}
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
