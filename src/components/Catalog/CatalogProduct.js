import CardProduct from 'components/Card/CardProduct';
import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import products from '../../assets/products'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(styles);

function CatalogProduct({categoryProduct, setChange, setProduct}) {
    const classes = useStyles();

    function arrowBack() {
        setChange('Category')
    }

    function viewDetails(){
        setChange('ProductDetail')
    }

    function onProduct(product){
        setProduct(product)
    }
    
    return (
        <div>
            <IconButton onClick={arrowBack} color='grey'>
                <ArrowBackIcon />    
            </IconButton>
            <div className={classes.container}>
                {products.map(product=>{
                    if(product.category===categoryProduct){return(<CardProduct viewDetails={viewDetails} onProduct={onProduct} product={product}/>)}            
                })}
            </div>
        </div>
    );
}

export default CatalogProduct;