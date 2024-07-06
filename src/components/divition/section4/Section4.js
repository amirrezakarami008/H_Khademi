import "./Section4.css";
import { Container, Row } from "react-bootstrap";
import Section4Item from "./Section4Item";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Section4() {
  const PartsValue = [
    {
      id: 1,
      img: 'https://bayanbox.ir/view/9018765952495637954/fanavari.jpg',
      title: "رشته شبکه و نرم افزار",
      route: "/networkAndSoftware",
      text: "شاید بشه قرن ۲۱ را قرن کامپیوتر و اینترنت نامید و به همین دلیل رشته کامپیوتر یا همان رشته شبکه و نرم افزار محبوب ترین رشته تحصیلی در هنرستان های فنی و حرفه ای شده است. امروزه از کامپیوتر در همه سازمانها و ادارات شهرهای بزرگ و کوچیک استفاده میشه.",
      CName: "border-0 text-white rounded-3 mx-2",
    },
    {
      id: 2,
      img: 'https://blog.ketabchi.com/wp-content/uploads/2023/09/%D8%AD%D8%B3%D8%A7%D8%A8%D8%AF%D8%A7%D8%B1%DB%8C.jpg',
      title: "رشته حسابداری",
      route: "/accounting",
      text: "قطعا حسابداری نیز مانند دیگر علوم فنی از آغازین روزهای پیدایش انسان به وجود آمده است. رشته حسابداری با گسترش کسب و کار ها و خدمات و نیز دانش و تکنولوژی در خدمت توسعه ی کشور ها در تمامی زمینه ها در آمده است. حسابداری در واقع با انتقال اطلاعات مالی به دیگران به نوعی زد.",
      CName: "border-0 text-white rounded-3 mx-2",
    },
    {
      id: 3,
      img: 'https://cdn1.ruydadiran.com/uploads/posts/2022-05/electrical-engineering-field-4.jpg',
      route: "/electrotechnic",
      title: "رشته الکتروتکنیک",
      text: "نرژی برق و توسعه آن این روزها به یکی از فناوری‌های مهم و موردنیاز هر کشور تبدیل گشته‌ است. انتقال انرژی از نیروگاه به واحدهای مصرف کننده‌ نیازمند حضور مهندسان برق الکتروتکنیک می‌باشد. پیشرفت صنعت برق در سال‌های اخیر باعث شده‌ زمینه‌های شغلی فراوانی برای این رشته‌ فراهم شود",
      CName: "border-0 text-white rounded-3 mx-2",
    },
  ];
  return (
    <Container>
      <Row>
        <div className="">
          <h4>
            <FaQuoteRight className="ms-2" size="25px" color="#346ed190"/> 
            در هنرستان فنی نمونه دولتی خادمی چه رشته هایی وجود دارد ؟
            <FaQuoteLeft className="ms-2" size="25px" color="#346ed190" /> 
          </h4>
        </div>
        {PartsValue.map((part) => (
          <Section4Item key={part.id} {...part} />
        ))}
      </Row>
    </Container>
  );
}
export default Section4;
