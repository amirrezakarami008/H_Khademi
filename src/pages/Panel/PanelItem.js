import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PanelItem({icon , title}) {
  return (
    <Col md={6} lg={3}>
      <Link>
        <div className="box-panel">
          <i className={icon}></i>
          <h5 className=" my-3 p-3">{title}</h5>
        </div>
      </Link>
    </Col>
  );
}

export default PanelItem;
