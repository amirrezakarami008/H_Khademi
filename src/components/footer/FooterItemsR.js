import { Link } from "react-router-dom";
import "./Footer.css";
function FooterItemsR({ icon, desc, hrefPhone, phone }) {
  return (
    <div className="iconStyle my-2">
      <span className="px-2">{icon}</span>
      <span className="fs-5 ms-2 text-dark opacity-75">
        {desc}
        <Link
          target="blank"
          to={`${hrefPhone}`}
          className="text-dark text-decoration-none"
        >
          {phone}
        </Link>
      </span>
    </div>
  );
}
export default FooterItemsR;
