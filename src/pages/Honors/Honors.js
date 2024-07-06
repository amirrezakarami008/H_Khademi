import { Container, Row } from 'react-bootstrap'
import './Honors.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HonorItems from './HonorItems'
import { useEffect, useState } from 'react'
import Network from '../../network'
function Honors(){
    const [honors , setHonors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const Honor = await network.getHonors();
      if (Honor == null || Honor.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setHonors(Honor.data);
      }
    }
    fetchData();
  } , [])
    return(
        <div>
            <Header />
            <Container className='my-5'>
            <div className="honors">
                <div className="baner text-center">
                    <h1>افتخارات هنرستان</h1>
                    <i className="fa-solid size-icon-honors fa-award"></i>
                </div>
                <Row className='my-5'>
                    {honors.map(item => (
                        <HonorItems key={item.id} {...item} />
                    ))}
                </Row>
            </div>
            </Container>
            <Footer />
        </div>
    )
}
export default Honors