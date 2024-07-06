import "./News.css";
import { Col } from "react-bootstrap";
import { BsChatRightQuoteFill } from "react-icons/bs";
import Aos from "aos";
import { useEffect } from "react";
function NewsItem({ image_id, title, desc }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Col
      md={6}
      lg={6}
      xl={4}
      className="p-4 mb-4 rounded"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="rounded p-3 px-0 pt-0 shadow box-bg rounded-top-4">
        <img
          src={`https://khademi.liara.run/${image_id}`}
          alt=""
          className="news-image img-fluid rounded-top-4 shadow"
        />
        <h5 className="text-start text-color mt-2 p-3 opacity-75">
          <BsChatRightQuoteFill
            size="20px"
            color="#346ed190"
            className="ms-2"
          />
          {title}
        </h5>
        <p className="text-dark opacity-75 p-3 pt-1">{desc}</p>
      </div>
    </Col>
  );
}
export default NewsItem;
