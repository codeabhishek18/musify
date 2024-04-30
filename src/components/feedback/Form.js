const Form = ({setShow}) =>
{

    return(
        <div className="form">
            <p>Feedback</p>
            <span onClick={()=>setShow(false)}>x</span>
            <input name="fullname" placeholder="Full name"/>
            <input name="email" placeholder="Email ID"/>
            <input name="subject" placeholder="Subject"/>
            <input className="desc" name="description" placeholder="Description"/>
            <button>Submit Feedback</button>
        </div>
    )
}

export default Form;