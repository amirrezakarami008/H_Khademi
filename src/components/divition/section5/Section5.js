import "./Section5.css";
import {Container , Row} from 'react-bootstrap'
import Section5Items from './Section5Items'
function Section5() {

  let CounterItems = [
    {
      id : 1,
      textValue : 'سال سابقه' ,
      icon : 'fa-sharp fa-solid fa-clock-rotate-left icon-Size',
      count : 50
    },
    {
      id : 2,
      textValue : 'دانش آموز' ,
      icon : 'fa-solid fa-users icon-Size',
      count : 400
    },
    {
      id : 3,
      textValue : 'پرسنل' ,
      icon : 'fa-solid fa-graduation-cap icon-Size',
      count : 40
    },
    {
      id : 4,
      textValue : 'وسعت' ,
      icon : 'fa-regular fa-building icon-Size',
      count : 1200
    },
  ]

  return (
    <div className="section-A py-5">
      <Container>
        <Row className="gy-4">
          {CounterItems.map(CounterItem => (
            <Section5Items key={CounterItem.id} {...CounterItem}/>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Section5;
