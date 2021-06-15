import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import CartProduct from "components/Cart/CartProduct";
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
//import HeaderLinks from "components/Header/HeaderLinks.js";
//import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Catalog from "components/Catalog/Catalog";
import HeaderLinks from "components/Header/HeaderLinks";
import { useSelector } from "react-redux";

// Sections for this page
//import ProductSection from "./Sections/ProductSection.js";
//import TeamSection from "./Sections/TeamSection.js";
//import WorkSection from "./Sections/WorkSection.js";

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
        brand="GINKGO"
        rightLinks={<HeaderLinks products={products} setCart={setCart}/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {/*<Parallax filter image={require("assets/img/frutos-seco.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Tienda sustentable</h1>
              <h4>
                Trabajamos para hacer del planeta un mejor lugar para vivir, te ofrecemos productos ecológicos de calidad que ayudarán a disminuir la contaminación ambiental y a combatir el cambio climático, acércate y conócelos.
              </h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                video
              </Button> 
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>*/}
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {cart=='Catalog'?<Catalog />:<CartProduct products={products}/>}
          {/* <ProductSection /> */}
          {/* <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
