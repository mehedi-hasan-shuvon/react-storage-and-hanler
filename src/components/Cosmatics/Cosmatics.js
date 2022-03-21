import React from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmatics = () => {
    const cosmetics = [
        {
            id: 101,
            name: 'Alta',
            price: 100,
        },
        {
            id: 201,
            name: 'Palish',
            price: 200,
        },
        {
            id: 3,
            name: 'Malish',
            price: 300,
        },
        {
            id: 4,
            name: 'Balish',
            price: 400,
        },
        {
            id: 5,
            name: 'Nalish',
            price: 500,
        },


        {
            "id": "62377fce952199a8969b765f",
            "price": 47,
            "name": "Mclaughlin Salas"
        },
        {
            "id": "62377fcedea96c4406e2f160",
            "price": 353,
            "name": "Boone Hyde"
        },
        {
            "id": "62377fce09c4aa7f5e06f361",
            "price": 539,
            "name": "Ruthie Walsh"
        },
        {
            "id": "62377fce4b5fdfa02868fe85",
            "price": 427,
            "name": "Trisha Gregory"
        },
        {
            "id": "62377fcee9567fb3c0a6827d",
            "price": 105,
            "name": "York Dunn"
        }



    ];

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money Needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmatics;