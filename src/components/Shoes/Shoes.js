import React from 'react';
import { add, multiply } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    const multotal = multiply(first, second);

    return (
        <div>
            <h3>This is Shoes Component</h3>
            <h2>{total}</h2>
            <h2>{multotal}</h2>
        </div>
    );
};

export default Shoes;