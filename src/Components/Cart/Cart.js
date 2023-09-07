import React from 'react';
import './Cart.css';
import Product from '../Product/Product';

const Cart = (props) => {
    const{cart} = props;
    // console.log(typeof cart);
    let names = [];
    let title = '';
    for(const product of cart ){
        // console.log(product.title);
        title = product.title;
        names.push(title);
        // console.log(typeof product.title);
        // if(names.length == 4 ){
        //     title = ''
        // }
    }
    console.log(names.length);
    return (
        <div>
            <h1>This is Cart</h1>
            {
                names.map(name => <p>{name}...</p>)
            }
        </div>
    );
};

export default Cart;