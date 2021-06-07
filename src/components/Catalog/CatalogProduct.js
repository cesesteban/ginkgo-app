import CardProduct from 'components/Card/CardProduct';
import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import products from '../../assets/products'

const useStyles = makeStyles(styles);

function CatalogProduct({categoryProduct, setChange}) {
    const classes = useStyles();

    function arrowBack() {
        setChange('True')
    }
    return (
        <div>
        <Button onClick={arrowBack}>
            <ArrowBackIcon color='primary'/>    
        </Button>
        <div className={classes.container}>
            {products.map(product=>{
                if(product.category===categoryProduct){return(<CardProduct product={product}/>)}            
            })}
        </div>
        </div>
    );
}

export default CatalogProduct;