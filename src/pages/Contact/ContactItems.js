
import { Link } from 'react-router-dom'
import './Contact.css'
function ContactItems({icon , title , phone , to }){
    return(
        <div className="item my-4">
            <i className={icon}></i>
            <span className="ms-2 fs-18px">
            {title}
            <Link to={to} className="dir text-dark text-decoration-none" target="blank">{phone}</Link>
            </span>
        </div>
    )
}

export default ContactItems