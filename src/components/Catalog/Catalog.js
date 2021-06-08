import CardCategory from 'components/Card/CardCategory';
import CardDetailProduct from 'components/Card/CardDetailProduct';
import React, { useState } from 'react';
import categories from '../../assets/categories'
import CatalogProduct from './CatalogProduct';


function Catalog(props) {

    const [change, setChange]=useState('Category')
    const [categoryProduct, setCategoryProduct]=useState('')
    const [product, setProduct]=useState('')

    if(change==='Category'){
        return (
            categories.map(category=>{
                return(<CardCategory setCategoryProduct={setCategoryProduct} setChange={setChange} category={category}/>)            
            })
        );
    }
    if(change==='Product'){
        return (
            <CatalogProduct setChange={setChange} setProduct={setProduct} categoryProduct={categoryProduct}/>                  
        );
    }
    if(change==='ProductDetail'){
        return(
            <CardDetailProduct product={product} setChange={setChange}/>
        )
    }
}

export default Catalog;