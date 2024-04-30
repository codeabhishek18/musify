import "../Styles.css"
import Form from "../feedback/Form";
import { useState } from 'react';

const Button = () =>
{
    const [show, setShow] = useState(false);

    return(
        <div>
            <button className="feedback" onClick={()=>setShow(true)}>Give Feedback</button>
            {show && <Form setShow={setShow}/>}
        </div>
    )
}

export default Button;