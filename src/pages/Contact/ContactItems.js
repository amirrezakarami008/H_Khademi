
import { Link } from 'react-router-dom'
import './Contact.css'
function ContactItems({icon , title , phone , hrefphone}){
    return(
        <div className="item my-4">
            <i className={icon}></i>
            <span className="ms-2 fs-18px">
            {title}
            <Link href={hrefphone} className="dir text-dark text-decoration-none" target="blank">{phone}</Link>
            </span>
        </div>
    )
}

export default ContactItems