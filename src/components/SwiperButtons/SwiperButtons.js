import "./SwiperButtons.css";
import { useSwiper } from "swiper/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function SwiperButtons() {
  const btnSwiper = useSwiper();
  return (
    <>
      <div className="text-end mediaQuery-style">
        <button className="btnStyle mx-1" onClick={() => btnSwiper.slidePrev()}>
          <MdOutlineKeyboardArrowRight size="30px" />
        </button>
        <button className="btnStyle mx-1" onClick={() => btnSwiper.slideNext()}>
          <MdKeyboardArrowLeft size="30px" />
        </button>
      </div>
    </>
  );
}
export default SwiperButtons;
