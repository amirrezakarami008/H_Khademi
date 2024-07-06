import { Link } from "react-router-dom";
import "./Footer.css";
function FooterL({ icon, href, desc }) {
  return (
    <div className="hoverStyle my-2">
      <span className="px-2">{icon}</span>
      <Link target="blank" to={href} className="fs-5 ms-2 text-decoration-none">
        {desc}
      </Link>
    </div>
  );
}
export default FooterL;
