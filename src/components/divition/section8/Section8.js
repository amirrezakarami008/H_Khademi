import "./Section8.css";
import { Col, Container, Row } from "react-bootstrap";
import Section8Item from "./Section8Item";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
function Section8() {
  const Serction8Data = [
    {
      id: 1,
      title: "رسالت مجموعه",
      text: "از طریق آموزش همه جانبه در محیطی ، پر تلاش ، با نشاط و متعال یادگیرانی با ایمان پرورش دهیم که مستقل ، اندیشمند ، اجتماعی ، مسولیت پذیر و متکی به نفس باشند. ",
    },
    {
      id: 2,
      title: "چشم انداز مجموعه",
      text: "مدرسه ای که همه آن را خانه خود بدانند و نه تنها دانش آموزان بلکه اولیاء دانش آموزان و معلمان نیز در آن به یادگیری عشق بورزند.",
    },
    {
      id: 3,
      title: "رویکرد مجموعه",
      text: " از ابتدای کار، به آموزشی همه جانبه و فراتر از کتاب‌های درسی با رویکرد پژوهش محور پرداخته‌ایم و امکانات مدرسه، نقش مهمی را در برنامه‌های درسی ما ایفا کرده است.",
    },
  ];
  return (
    <Container className="backgruond-color m-inline">
      <Row>
        <Col
          sm={12}
          className="shadow border-2 parallax p-5 text-white"
        >
          <h3 className="text-center p-2 fw-bold my-3">پلی به سوی موفقیت</h3>
          <p className="text-justify p-3 mb-5 border border-info rounded text-white line-height-section6">
            <FaQuoteRight className="ms-2" size="25px" color="#346ed280" />
            تلاش کنید همیشه به عنوان یک دانش‌آموز بمانید و از هر فرصتی برای
            یادگیری بهره ببرید. به عنوان یک معلم، به دیگران با احترام و صداقت ،
            آموزش دهید تا بهترین نتیجه را به دست آورید. هر دو فعالیت اموزش دادن
            و اموزش دیدن به شما ارتباط انسانی تازه‌ای با دیگران ارائه خواهد داد.
            اموزش دادن و اموزش دیدن دو فعالیت بسیار ارزشمند هستند که می‌توانند
            به شما کمک کنند تا در زندگی شخصی و حرفه‌ای خود پیشرفت کنید. به خوبی
            از این دو فرصت استفاده کنید و هر روز یک قدم بزرگ‌تر به سوی بهبود و
            پیشرفت بردارید.
            <FaQuoteLeft className="ms-2" size="25px" color="#346ed280" />
          </p>
        </Col>
      </Row>
      <Row>
        {Serction8Data.map((Item) => (
          <Section8Item key={Item.id} {...Item} />
        ))}
      </Row>
    </Container>
  );
}
export default Section8;
