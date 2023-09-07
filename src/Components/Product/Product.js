import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product,handleAddToCart} = props;
    const { title,price,image } = product;
    // console.log(props.product.title);

    return (
        <div className='product'>
            <img src={image} />
            <div className='product-info'>
                <h3>{title}</h3>
                <p>Price: ${price}</p>
                <button onClick={() => {handleAddToCart(product)}} className='btn-cart'>
                    <p>Add To Cart</p>
                </button>
            </div>
            
        </div>
    );
};

export default Product;