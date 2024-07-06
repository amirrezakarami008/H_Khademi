import { Container } from "react-bootstrap";
import "./AlbumZoom.css";
import AlbumZoomItems from "./AlbumZoomItems";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Network from "../../../network";
import Loding from "../../../components/Loding/Loding";
function AlbumZoom() {
  // let n = 8
  // let a = "";
  // for (i = 0 i < n ; i++){
  //if(n % 2 == 0){
  // a = "justify-content-end"
  //   n -= 1
  //   }else{
  // a = "justify-content-start"
  //}
  //}
  //
  // let Items = [
  //   {
  //     id: 1,
  //     image: "https://swiperjs.com/demos/images/nature-1.jpg",
  //     RowClass: "justify-content-end",
  //     animation: "fade-up",
  //   },
  //   {
  //     id: 2,
  //     image: "https://swiperjs.com/demos/images/nature-2.jpg",
  //     RowClass: "justify-content-start",
  //     animation: "fade-down",
  //   },
  //   {
  //     id: 3,
  //     image: "https://swiperjs.com/demos/images/nature-3.jpg",
  //     RowClass: "justify-content-end",
  //     animation: "fade-right",
  //   },
  //   {
  //     id: 4,
  //     image: "https://swiperjs.com/demos/images/nature-4.jpg",
  //     RowClass: "justify-content-start",
  //     animation: "fade-left",
  //   },
  //   {
  //     id: 5,
  //     image: "https://swiperjs.com/demos/images/nature-5.jpg",
  //     RowClass: "justify-content-end",
  //     animation: "flip-left",
  //   },
  //   {
  //     id: 6,
  //     image: "https://swiperjs.com/demos/images/nature-4.jpg",
  //     RowClass: "justify-content-start",
  //     animation: "flip-right",
  //   },
  //   {
  //     id: 7,
  //     image: "https://swiperjs.com/demos/images/nature-7.jpg",
  //     RowClass: "justify-content-end",
  //     animation: "zoom-in",
  //   },
  //   {
  //     id: 8,
  //     image: "https://swiperjs.com/demos/images/nature-8.jpg",
  //     RowClass: "justify-content-start",
  //     animation: "zoom-in-up",
  //   },
  // ];
  const albumId = useParams().albumId - 1;
  const [amir, setAmir] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const album = await network.getAlbums();
      if (album == null || album.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setAmir(album.data[albumId].images);
        setIsPending(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {
        isPending ? (
          <Loding />
        ) : (
          <div className="container-style">
      <Container>
        <div className="title-album">
          <p className="fs-4 bg-dark bg-opacity-25 rounded p-3 border border-white">
            تصاویر اردوی مشهد مقدس{" "}
          </p>
          <span className="fs-6 fw-bold bg-dark bg-opacity-50 rounded p-4 border border-white border-opacity-50">
            برای دیدن تصاویر بیشتر اسکرول کنید
          </span>
          <RiArrowDownDoubleFill
            size="50px"
            color="#fff"
            className="animation"
          />
        </div>
        {amir.map((item) => (
          <AlbumZoomItems key={item.id} {...item} />
        ))}
      </Container>
    </div>
        )
      }
    </>
   
  );
}

export default AlbumZoom;
