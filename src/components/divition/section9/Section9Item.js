import "./Section9.css";
import Accordion from "react-bootstrap/Accordion";
function Section9Item({ title, desc, id, icon }) {
  return (
    <>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>
          {/* {icon} */}
          {title}
        </Accordion.Header>
        <Accordion.Body className="text-start">{desc}</Accordion.Body>
      </Accordion.Item>
    </>
  );
}
export default Section9Item;
