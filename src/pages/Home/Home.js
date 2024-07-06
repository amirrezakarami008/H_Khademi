import Header from "../../components/header/Header";
import Section1 from "../../components/divition/section1/Section1";
import Section2 from "../../components/divition/section2/Section2";
import Section3 from "../../components/divition/section3/Section3";
import Section4 from "../../components/divition/section4/Section4";
import Section6 from "../../components/divition/section6/Section6";
import Section7 from "../../components/divition/section7/Section7";
import Footer from "../../components/footer/Footer";
import Section8 from "../../components/divition/section8/Section8";
// import Section9 from "../../components/divition/section9/Section9";
import Management from "../../components/divition/Managment/Managment";
import "./Home.css";

function Home() {

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section6 />
      <Section3 />
      <Section7 />
      <Section8 />
      {/* <Section9 /> */}
      <Management />
      <Footer />
    </>
  );
}
export default Home;
