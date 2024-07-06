import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Container, Row } from "react-bootstrap";
import "./Teachers.css";
import TeachersItem from "./TeachersItem";
import { useEffect, useState } from "react";
import Network from "../../network";
function Teachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const Teacher = await network.getTeachers();
      if (Teacher == null || Teacher.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setTeachers(Teacher.data);
      }
    };
    fetchData();
  }, []);

  // const TeachersData = [
  //     {
  //         id : 1,
  //         image : images,
  //         name : "سعید آذرمهر",
  //         field : "شبکه و نرم افزار - الکتروتکنیک"
  //     },
  //     {
  //         id : 2,
  //         image : images1,
  //         name : "اصغر رعیت پور",
  //         field : "الکتروتکنیک"
  //     },
  //     {
  //         id : 3,
  //         image : images2,
  //         name : "محمد دهقان باغی",
  //         field : "حسابداری"
  //     },
  //     {
  //         id : 4,
  //         image : images3,
  //         name : "احمد گلزار",
  //         field : "تاریخ"
  //     },
  //     {
  //         id : 5,
  //         image : images,
  //         name : "مرتضی انتظاری",
  //         field : "تربیت بدنی"
  //     }
  // ]
  return (
    <>
      <Header />
      <Container>
        <Row>
          {teachers.map((teacher) => (
            <TeachersItem key={teacher.id} {...teacher} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Teachers;
