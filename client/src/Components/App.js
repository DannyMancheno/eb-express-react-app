
import react, {useEffect, useState} from 'react';

import Flower from './Flower';
import '../Styles/App.css';

export default function App() {

    let [flower, updateFlower] = useState([{}]);
    useEffect(()=>{
        fetch('/flower')
            .then( response => response.json())
            .then(data =>{
                updateFlower(data)
            });
    }, [])
    return (
        <div className='appContainer'>
            <Flower />
            {(typeof flower === undefined) ? (
                <p>Loading</p>
            ) : (
                <p>
                    Flower Name : {flower.name}
                    <br />
                    Flower Color: {flower.color}
                </p>
            )}
        </div>
    )
}

