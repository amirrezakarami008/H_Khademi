import "./Section7.css";
import { Col, Container, Row } from "react-bootstrap";
import Cup from "../../../assets/images/cup.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect, useState } from "react";
import Network from "../../../network";
import Section7Item from "./Section7Item";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Loding from "../../Loding/Loding";
function Section7() {
  const [honorsHome, setHonorsHome] = useState([]);
  const [isPending , setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const Honor = await network.getHonors(1, 4);
      if (Honor == null || Honor.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setHonorsHome(Honor.data);
        setIsPending(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {isPending ? (
        <Loding />
      ) : (
        <Container className="my-5">
      <Row className="align-items-center bacgruond-color-eft py-4 rounded-4 shadow">
        <Col sm={12} md={6} className="text-center">
          <img src={Cup} className="img-fluid display-none p-3" alt="" />
        </Col>
        <Col sm={12} md={6}>
          <h3 className="p-3 text-dark Cairo text-center">
          <FaQuoteRight className="ms-2" size="25px" color="#346ed190" />
            گوشه‌ای از افتخارت مجموعه
          <FaQuoteLeft className="ms-2" size="25px" color="#346ed190" />
          </h3>
          {honorsHome.map((item) => (
            <Section7Item key={item.id} {...item} />
          ))}
          <Row className="my-1 py-3 rounded align-items-center justify-content-center">
            <Col
              className="col-10 text-center"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <Link
                target="blank"
                className="btn-all text-decoration-none d-block"
                to={"/honors"}
              >
                مشاهده همه افتخارت
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
      )}
    </>
  );
}
export default Section7;
