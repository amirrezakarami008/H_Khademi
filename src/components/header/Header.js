import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.jpg";
import Aos from "aos";
import { useEffect } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
// search-Box-Import
// import Form from "react-bootstrap/Form";
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Col from "react-bootstrap/esm/Col";
// import Row from "react-bootstrap/esm/Row";
function Header() {
  useEffect(() => {
    Aos.init();
  }, []);
  // search-Box-State
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const expand = "lg";
  return (
    <>
      <Navbar expand={expand} className="py-3 bg-nav mb-5">
        <Container className="m-0 m-auto">
          {/* دیوی که نوبار تاگل و نوبار برند ، توش هست ، بعد از اینکه سرچ باکس گذاشته شد ، باید حذف شود */}
          <div className="d-flex justify-content-start  align-items-center">
            <Navbar.Toggle
              className="border-0 fs-4"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Brand href="#">
              <img
                src={Logo}
                className="img-fluid border-logo shadow"
                style={{
                  width: "50px",
                  height: "50px",
                  borderColor: "#346ed1",
                  borderRadius: "50%",
                }}
                data-aos="fade-left"
                data-aos-duration="1000"
                alt=""
              />
            </Navbar.Brand>
          </div>
          <NavLink
            to="tel:+03536217013"
            className="btn-login mx-1"
            id="display"
            data-aos="fade-right"
          >
            <span className="mx-1">035-36217013</span>
            <span className="mx-1">
              <FaPhoneFlip size={"20px"} className="custom-icon-style" />
            </span>
          </NavLink>
          {/* search-Box-Modal */}
          {/* <div className="my-2" id="display">
                        <Button onClick={handleShow} className="ms-4" style={{backgroundColor : "transparent" , border : "none"}}>
                            <i className="bi bi-search text-dark fs-4 fw-bold bg-nav"></i>
                        </Button>
                        <Modal show={show} onHide={handleClose} className="bg-opacity-10 bg-danger">
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                            <Form inline>
                                <Row className="justify-content-center align-items-center">
                                    <Col xs="auto">
                                        <Form.Control
                                        style={{width: "275px" , outline : "0" , boxShadow : "none"}}
                                        type="text"
                                        placeholder="دنبال چی میگردی ؟ اینجا بنویس"
                                        className="mr-sm-2 bg-color p-3 border"
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit"  style={{backgroundColor : "transparent" , border : "none"}}>
                                            <i className="bi bi-search fs-4 text-dark"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                            </Modal.Body>
                        </Modal>
                </div> */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                هنرستان فنی نمونه دولتی خادمی
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 justify-content-center align-items-center">
                <NavLink to={"/"} className="nav-link">
                  صفحه نخست
                </NavLink>
                <NavLink to={"/news"} className="nav-link">
                  اخبار و اطلاعیه
                </NavLink>
                <NavLink to={"/album"} className="nav-link">
                  گالری تصاویر
                </NavLink>
                {/* <NavLink to={"/registration"} className="nav-link">
                  پیش ثبت نام
                </NavLink> */}
                <NavLink to={"/contact"} className="nav-link">
                  ارتباط با هنرستان
                </NavLink>
                <NavLink to={"/honors"} className="nav-link" id="dsply1">
                  افتخارات
                </NavLink>
                <NavLink to={"/aboutus"} className="nav-link" id="dsply2">
                  درباره هنرستان
                </NavLink>
                {/* <NavLink to={"/grading"} className="nav-link" id="dsply4">نمره دهی</NavLink>
                      <NavLink to={"/rollcall"} className="nav-link" id="dsply5">سامانه حضور و غیاب</NavLink> */}
              </Nav>
              <div className="my-1" id="menu-hide">
                <NavLink
                  to="tel:+03536217013"
                  className="btn-login mx-1"
                  data-aos="fade-right"
                >
                  <span className="mx-1">035-36217013</span>
                  <span className="mx-1">
                    <FaPhoneFlip size={"20px"} className="custom-icon-style" />
                  </span>
                </NavLink>
                {/* search-Box-Icon */}
                {/* <Button onClick={handleShow} className="ms-4" style={{backgroundColor : "transparent" , border : "none"}}>
                        <i className="bi bi-search text-dark fs-4 bg-nav"></i>
                    </Button> */}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
