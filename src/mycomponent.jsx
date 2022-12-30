import { useEffect, useState } from "react";
import './mycomponent.css';

function MyComponent(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
                console.log(result);
            },
        )
    }, [])
    return (
        <div>
            <img className="img" src={items.message} />
        </div>
    )
}

export default MyComponent;