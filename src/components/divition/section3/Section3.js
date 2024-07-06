import "./Section3.css";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Network from "../../../network";
import Section3Items from "./Section3items";
import Loding from "../../Loding/Loding";
function Section3() {
  const [albumHome, setAlbumHome] = useState([]);
  const [isPending , setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const album = await network.getBaseInfo();
      if (album == null || album.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setAlbumHome(album.data.album);
        setIsPending(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isPending ? (
        <Loding />
      ) : (
        <div className="p-section3">
      <Container className="mb-5 p-0  text-center align-items-center rounded">
        <Row className="gy-4 album-style">
          <Col>
            <h2 className="text-start">
              <FaQuoteRight className="ms-2" size="25px" color="#346ed190" />
              تکه ای از آلبوم تصاویر
              <FaQuoteLeft className="ms-2" size="25px" color="#346ed190" />
            </h2>
          </Col>
          <Col>
            <div className="slider-container">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {albumHome.map((item) => (
                  <SwiperSlide id="albumHome" key={item.id}>
                    <Section3Items {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      )}
    </>
  );
}
export default Section3;
