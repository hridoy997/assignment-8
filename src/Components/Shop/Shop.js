import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (selectedProduct) => {
        // setCart(selectedProduct);
        const newCart = [...cart,selectedProduct];
        setCart(newCart);

    }

    return (
        <div className='shop'>

            <div className='products-section'>
                {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    />)
                }
            </div>
            
            <div className='cart-section'>
                <Cart cart = {cart}/>
            </div>

        </div>
    );
};

export default Shop;