import "./Section1.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
function Section1Item({ textValue, icon, href }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Col
      md={6}
      xl={4}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="menu-item">
        <Link target="blank" to={href}>
          <span className="bg-icon">{icon}</span>
        </Link>
        <Link target="blank" to={href}>
          <b>{textValue}</b>
        </Link>
      </div>
    </Col>
  );
}

export default Section1Item;
