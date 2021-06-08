import React from 'react';

function CartProduct({products}) {
    return (
        products.map(product=>{
            return <div>{product.product}</div>
        })
    );
}

export default CartProduct;