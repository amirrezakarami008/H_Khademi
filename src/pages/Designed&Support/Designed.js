import { useEffect, useState } from "react";
import DesighnedItem from "./DesighnedItem";
import "./Designed.css";
import { Container, Row } from "react-bootstrap";
import Network from "../../network";
import Loding from "../../components/Loding/Loding";
function Desighned() {
  // const data = [
  //   {
  //     name: "امیرحسین شرفی",
  //     image: "",
  //     position: "فرانت اند دولوپر",
  //     github: "https://github.com/AmirhosseinSharafi790",
  //     instagram: "https://instagram.com/amirhosseinshrafii",
  //     telegram: "https://t.me/amirhosseinshrafii",
  //     phone: "tel:+09928017951",
  //     text: "فرانت‌‌اند دولوپر ، طراح و سازنده‌ی بخش‌هایی از وب‌سایت یا اپلیکیشن که کاربر می‌بیند و با آنها تعامل دارد، است، به عبارت دیگر، با کد نویسی و ابزارهای مختلف، ظاهر و عملکرد قسمت‌های قابل مشاهده مثل دکمه‌ها، منو، تصاویر و متن‌ها را پیاده‌سازی می‌کند؛ هدف او ایجاد رابط کاربری زیبا، کاربردی و  responsive  برای  ارائه  تجربه‌ای  لذت‌بخش  به  کاربر  است",
  //   },
  //   {
  //     name: "علی گنجی زاده",
  //     image: "",
  //     position: "بک اند دولوپر",
  //     github: "https://github.com/aliganjizade",
  //     instagram: "https://instagram.com/aliganjizade",
  //     telegram: "https://t.me/Ali_Ganji_z",
  //     phone: "tel:+09039661801",
  //     text: "بک‌‌اند دولوپر، مهندس پشت پرده‌ی وب‌سایت یا اپلیکیشن است. او با کد نویسی و ابزارهای مختلف، بخش‌های  نامرئی  و  مغز  سیستم  را  می‌سازد  تا  همه  چیز  به  درستی  کار  کند ؛ مسئولیت‌هایی مثل: ایجاد و مدیریت پایگاه داده ، نوشتن کدهای منطقی و الگوریتم‌ها ، توسعه APIها برای ارتباط با سایر بخش‌ها ،امنیت و پایداری سیستم ؛ بر عهده‌ی اوست.",
  //   },
  //   {
  //     name: "امیررضا کرمی",
  //     image: "",
  //     position: "فرانت اند دولوپر",
  //     github: "https://github.com/amirrezakarami008",
  //     instagram: "https://instagram.com/amirrezakarami008",
  //     telegram: "https://t.me/QAW008",
  //     phone: "tel:+09900175567",
  //     text: "فرانت‌‌اند دولوپر ، طراح و سازنده‌ی بخش‌هایی از وب‌سایت یا اپلیکیشن که کاربر می‌بیند و با آنها تعامل دارد، است، به عبارت دیگر، با کد نویسی و ابزارهای مختلف، ظاهر و عملکرد قسمت‌های قابل مشاهده مثل دکمه‌ها، منو، تصاویر و متن‌ها را پیاده‌سازی می‌کند؛ هدف او ایجاد رابط کاربری زیبا، کاربردی و  responsive  برای  ارائه  تجربه‌ای  لذت‌بخش  به  کاربر  است",
  //   },
  // ];

  const [desighned, setDesighnede] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const support = await network.getDesigned();
      if (support == null || support.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setDesighnede(support.data);
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
        <Container className="screen-style my-5">
          <Row>
            {desighned.map((item) => (
              <DesighnedItem key={item.name} {...item} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}
export default Desighned;
