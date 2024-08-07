import { Col, Row } from 'react-bootstrap';
import './AlbumZoom.css'
import Aos from 'aos';
import { useEffect } from 'react';
function AlbumZoomItems({image_id , id}) {
    useEffect(() => {
        Aos.init();
    } , [])
    return ( 
        <Row className={`justify-content-${id % 2 === 0 ? 'end' : 'start'} margin-row`} data-aos={`${id % 2 === 0 ? 'fade-right' : 'fade-left'}`} data-aos-duration="1500">
            <Col md = {6} lg = {4}>
                <div className='style-images'>
                    <img src={`https://khademi.liara.run/${image_id}`} alt="" className='img-fluid' />
                </div>
            </Col>
        </Row>
     );
}

export default AlbumZoomItems;