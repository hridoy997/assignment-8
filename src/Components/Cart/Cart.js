import React from 'react';
import './Cart.css';
// import Product from '../Product/Product';

const Cart = (props) => {
    const{cart} = props;
    // console.log(typeof cart);
    let names = [];
    let title = '';
    var item = '';
    

    
    for(const product of cart ){
        // console.log(product.title);
        if(names.length < 4){
            title = product.title;
        }else{
            title = '4 Item Selected';
        }
        // title = product.title;
        names.push(title);
    }

    // names.push(item);
    // console.log(names.length);
    const handleRandomItem = (selectedItem) => {
        item = selectedItem[Math.floor(Math.random()*selectedItem.length)];
        // console.log('selected item',selectedItem);
        console.log(item);
        title = item;
        console.log(title);
    }
    
    
    return (
        <div>
            <h1>This is Cart</h1>
            <div>
                {
                    names.map(name => <p>{name}...</p>)
                }
            </div>
            <div className="button-section">
                <button onClick={()=> {handleRandomItem(names)}}>Choose 1 for me</button>
                <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;