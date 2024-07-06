import "./Section2Item.css";
import { BsChatRightQuoteFill } from "react-icons/bs";
function Section2Item({ image_id, title, desc }) {
  return (
    <div className="custom-style rounded p-3 px-0 pt-0 shadow box-bg rounded-top-4">
      <img
        src={`https://khademi.liara.run/${image_id}`}
        alt=""
        className="img-fluid rounded-bottom-4 rounded-top-4 shadow aspect-ratio"
      />
      <h5 className=" text-start text-color mt-2 p-3 opacity-75">
        <BsChatRightQuoteFill size="20px" color="#346ed190" className="ms-2" />
        {title}
      </h5>
      <p className="text-start text-dark opacity-75 p-3 pt-1">{desc}</p>
    </div>
  );
}
export default Section2Item;
