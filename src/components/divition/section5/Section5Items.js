import "./Section5.css";
import { Col } from "react-bootstrap";
import CountUp from "react-countup";
import Aos from "aos";
import { useEffect } from "react";
function Section5Items({ textValue, icon, count }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Col md={6} xl={3}>
      <div
        className="counterBox p-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <i className={icon}></i>
        <p className="purecounter fs-3 my-2"></p>
        <p className="desc-counterBox">{textValue}</p>
        <CountUp
          start={0}
          end={count}
          delay={2}
          duration={5}
          className="sizeCount"
        />
      </div>
    </Col>
  );
}

export default Section5Items;
