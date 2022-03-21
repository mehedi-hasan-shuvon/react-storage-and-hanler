import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {


    const addtoCart = (id) => {
        addToDb(id);
    };

    const addToCartWithParam = () => {
        addtoCart(props.cosmetic.id);
    };
    return (
        <div className='product'>
            <h2>Buy This: {props.cosmetic.name}</h2>
            <p>Only for: {props.cosmetic.price}$</p>

            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            <button onClick={() => addtoCart(props.cosmetic.id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;