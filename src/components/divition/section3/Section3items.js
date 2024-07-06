import './Section3.css'
function Section3Items({image_id}){
    return(
        <div>
            <img src={`https://khademi.liara.run/${image_id}`} alt='' className='image-style'/>
        </div>
    )
}

export default Section3Items