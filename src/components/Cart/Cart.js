import React from "react";
import { useSelector } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartProduct from "components/Cart/CartProduct";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
export default function Cart() {
    const classes = useStyles();
    const products = useSelector(state => state.products)
    return (
        <div className={classes.navLink}>
            <ShoppingCartIcon />
        </div>
    )
}