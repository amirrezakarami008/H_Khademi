import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Panel.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FaRegUserCircle, FaAssistiveListeningSystems } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import PanelItem from "./PanelItem";
function Panel() {
  const Items = [
    {
      id: 1,
      icon: "fa-solid fa-graduation-cap",
      title: "تایید دانش آموز",
    },
    {
      id: 2,
      icon: "fa-solid fa-graduation-cap",
      title: "تایید دانش آموز",
    },
    {
      id: 3,
      icon: "fa-solid fa-graduation-cap",
      title: "تایید دانش آموز",
    },
    {
      id: 4,
      icon: "fa-solid fa-graduation-cap",
      title: "تایید دانش آموز",
    },
    {
      id: 5,
      icon: "fa-solid fa-graduation-cap",
      title: "تایید دانش آموز",
    },
    {
      id: 61,
      icon: "fa-solid fa-graduation-cap",
      title: "تایید دانش آموز",
    },
  ];
  const expand = "992px";
  return (
    <div>
      <Header />
      <Container className="my-3">
        <Navbar
          collapseOnSelect
          expand={expand}
          className="shadow bg-dark p-3 rounded my-3 d-lg-none "
        >
          <Container>
            <Navbar.Brand className="text-info">
              <img
                src="https://secure.gravatar.com/avatar/13b6e8c7e5f235b591051fcfa1507ace?s=80&d=mm&r=g"
                width="30"
                height="30"
                className="d-inline-block rounded-circle me-2 align-top"
                alt="logo"
              />
              امیررضا کرمی
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              id="icon-list"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="text-info">
                  <FaRegUserCircle className="me-3" size={"25px"} />
                  جزعیات حساب
                </Nav.Link>
                <Nav.Link className="text-info">
                  <FaAssistiveListeningSystems className="me-3" size={"25px"} />
                  سیستم هوشمند
                </Nav.Link>
                <Nav.Link className="text-info">
                  <MdLogout className="me-3" size={"25px"} />
                  خروج از سیستم
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row className="align-items-center">
          <Col className="bg-container col-lg-3">
            <div className="card-container">
              <div className="card-header">
                <div>
                  <img
                    src="https://secure.gravatar.com/avatar/13b6e8c7e5f235b591051fcfa1507ace?s=80&d=mm&r=g"
                    alt=""
                  />
                </div>
                <h6>سلام امیررضا(ص) عزیز !</h6>
              </div>
              <hr />
              <div className="card-body-panel">
                <button>
                  {" "}
                  <FaRegUserCircle className="me-3" size={"25px"} />
                  جزعیات حساب
                </button>
                <button>
                  {" "}
                  <FaAssistiveListeningSystems className="me-3" size={"25px"} />
                  سیستم هوشمند
                </button>
                <button>
                  {" "}
                  <MdLogout className="me-3" size={"25px"} />
                  خروج از سیستم
                </button>
              </div>
            </div>
          </Col>
          <Col className="panel-box col-lg-9">
            <div className="panel-option">
              <Row>
                {Items.map((item) => (
                  <PanelItem key={item.id} {...item} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Panel;
