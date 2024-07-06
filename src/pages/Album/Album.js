import AlbumItem from "./AlbumItem";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import Network from "../../network";
import Loding from "../../components/Loding/Loding";
function Swipers() {
  const [albumState, setAlbumState] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const album = await network.getAlbums();
      if (album == null || album.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setAlbumState(album.data);
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
        <div>
          <Header />
          <Container>
            <Row className="gy-5">
              {albumState.map((item) => (
                <AlbumItem key={item.id} {...item} />
              ))}
            </Row>
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Swipers;
