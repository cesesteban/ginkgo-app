import React, {useState} from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import CartProduct from "components/Cart/CartProduct";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Catalog from "components/Catalog/Catalog";
import HeaderLinks from "components/Header/HeaderLinks";
import { useSelector } from "react-redux";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const [cart, setCart]=useState('Catalog')
  const products = useSelector(state=>state.products)
  const { ...rest } = props;
  return (
    <div>
      <Header
        setCart={setCart}
        color="white"
        routes={dashboardRoutes}
        brand="MINIMAL SHOP"
        rightLinks={<HeaderLinks products={products} setCart={setCart}/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {cart=='Catalog'?<Catalog />:<CartProduct products={products}/>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
