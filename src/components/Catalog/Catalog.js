import CardCategory from 'components/Card/CardCategory';
import React, { useState } from 'react';
import categories from '../../assets/categories'
import CatalogProduct from './CatalogProduct';

function Catalog(props) {

    const [change, setChange]=useState('True')
    const [categoryProduct, setCategoryProduct]=useState('')

    if(change==='True'){
        return (
            categories.map(category=>{
                return(<CardCategory setCategoryProduct={setCategoryProduct} setChange={setChange} category={category}/>)            
            })
        );
    }else{
        return (
            <CatalogProduct setChange={setChange} categoryProduct={categoryProduct}/>                  
        );
    }
}

export default Catalog;