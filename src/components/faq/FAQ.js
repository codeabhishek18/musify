import open from '../../assets/open.png';
import close from '../../assets/close.png'
import { useState } from 'react';

export const data = [
    {
        id: 1,
        que : 'is QTify free to use?',
        ans : 'Yes! QTify is free to use'
    },
    {
        id: 2,
        que : 'can I download and listen to the songs offline?',
        ans : "Sorry, unfortunately we don't provide the service to download any songs"
    }
]

const FAQ = () =>
{
    const [isClicked, setIsClicked] = useState(false);
    const[current, setCurrent] = useState(null);

    return(
        <div className="qa-container">
            <h1>FAQs</h1>
            {data.map((item)=>
            (
                <div key={item.id} className="qa">
                    <div className="que">
                        <p>{item.que}</p>
                        <button onClick={()=>
                        {
                            setCurrent(item.id);
                            setIsClicked(!isClicked);
                        }}>
                            <img src={isClicked && (current === item.id) ? close : open} alt="dropicon"/>
                        </button>
                    </div>
                    <div className={isClicked && current === item.id ? 'ans open' : 'ans close'}>
                        <p>{item.ans}</p>
                    </div>
                </div>
            ))}
            <div className="hr"></div>
        </div>
    )
}

export default FAQ;