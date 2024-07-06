import { Col, Container, Row } from "react-bootstrap";
import "./Section9.css";
import Section9Item from "./Section9Item";
import Accordion from "react-bootstrap/Accordion";
import images from "../../../assets/images/Question.png";
import { PiStudentBold } from "react-icons/pi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Section9() {
  const Section9Data = [
    {
      id: 0,
      title: "ی زیادی در شصت و سه درصد گذشته، حال و آیند",
      // icon: <PiStudentBold size={"23px"} className="mx-2" />,
      desc: "از طریق آموزش همه جانبه در محیطی ، پر تلاش ، با نشاط و متعال یادگیرانی با ایمان پرورش دهیم که مستقل ، اندیشمند ، اجتماعی ، مسولیت پذیر و متکی به نفس باشند. ",
    },
    {
      id: 1,
      title:
        "را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی",
      // icon: <PiStudentBold size={"23px"} className="mx-2" />,
      desc: "مدرسه ای که همه آن را خانه خود بدانند و نه تنها دانش آموزان بلکه اولیاء دانش آموزان و معلمان نیز در آن به یادگیری عشق بورزند.",
    },
    {
      id: 2,
      title: "اده از طراحان گرافیک است. چاپگرها و متون بلکه",
      // icon: <PiStudentBold size={"23px"} className="mx-2" />,
      desc: " از ابتدای کار، به آموزشی همه جانبه و فراتر از کتاب‌های درسی با رویکرد پژوهش محور پرداخته‌ایم و امکانات مدرسه، نقش مهمی را در برنامه‌های درسی ما ایفا کرده است.",
    },
    {
      id: 3,
      title: "اده از طراحان گرافیک است. چاپگرها و متون بلکه",
      // icon: <PiStudentBold size={"23px"} className="mx-2" />,
      desc: " از ابتدای کار، به آموزشی همه جانبه و فراتر از کتاب‌های درسی با رویکرد پژوهش محور پرداخته‌ایم و امکانات مدرسه، نقش مهمی را در برنامه‌های درسی ما ایفا کرده است.",
    }
  ];
  return (
    <div className="section9 py-5 mt-5">
      <Container>
        <Row className="justify-content-center align-items-center m-auto">
          <Col sm={12} lg={12}>
            <Accordion className="py-3">
              <h4 className="my-3">
                <FaQuoteRight className="ms-2" size="25px" color="#346ed190" />
                سوالات متداول
                <FaQuoteLeft className="ms-2" size="25px" color="#346ed190" />
              </h4>
              {Section9Data.map((Item) => (
                <Section9Item key={Item.id} {...Item} />
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section9;
