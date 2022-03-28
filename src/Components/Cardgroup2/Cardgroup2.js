import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const Cardgroup2 = () => {
    const products = [
        { id: 1, name: 'Laptop Pro', price: 125000 },
        { id: 2, name: 'Laptop Crow', price: 125000 },
        { id: 3, name: 'Laptop Grow', price: 125000 },
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2 product={product}></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default Cardgroup2;