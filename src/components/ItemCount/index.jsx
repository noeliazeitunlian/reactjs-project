import './itemCount.css';
import React, {useState, useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {    
    const [count, setCount] = useState(parseInt(initial)); 

    const decrease = () => {
        setCount (count - 1);
    }

    const increase = () => {
        setCount (count + 1);
    }

    
    useEffect(() => {
        setCount(parseInt(initial));
    },[initial]) //Setea el valor inicial cada vez que haya en cambio en initial

    return (

        <div className='counter'>
            <button className="btn-counter" disabled={count <= 1} onClick={decrease}>-</button>
            <span className='total-counter'>{count}</span>
            <button className="btn-counter" disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button className="btn-cart" disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito <i class="bi bi-cart"></i></button>
            </div>
        </div>
    )
    }

export default ItemCount;