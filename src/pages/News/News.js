import Header from "../../components/header/Header";
import "./News.css";
import Footer from "../../components/footer/Footer";
import { Container, Row } from "react-bootstrap";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import Network from "../../network";
import Loding from "../../components/Loding/Loding";
function News() {
  const [news, setNews] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const Honor = await network.getNews();
      if (Honor == null || Honor.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setNews(Honor.data);
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
            <Row className="my-2 d-flex  align-items-center">
              {news.map((Item) => (
                <NewsItem key={Item.id} {...Item} />
              ))}
            </Row>
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}
export default News;
