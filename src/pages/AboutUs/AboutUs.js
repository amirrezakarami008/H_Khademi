import "./AboutUs.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import AboutUsItem from "./AboutUsItem";
import { useEffect, useState } from "react";
import Network from "../../network";
import { Link } from "react-router-dom";
function AboutUs() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const about = await network.getAbouts();
      if (about == null || about.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setAbouts(about.data);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={12} md={4} className="mt-5">
            <Card className="bg-info fixed-style">
              <Card.Header className="text-dark">دسته بندی</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Link
                    className="text-dark text-decoration-none p-2 border-style"
                    to={"/aboutus"}
                  >
                    درباره هنرستان
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    className="text-dark text-decoration-none p-2"
                    to={"/contact"}
                  >
                    ارتباط با هنرستان
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    className="text-dark text-decoration-none p-2"
                    target="blank"
                    to={"/honors"}
                  >
                    افتخارات
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={8}>
            {abouts.map((item) => (
              <AboutUsItem key={item.id} {...item} />
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default AboutUs;
