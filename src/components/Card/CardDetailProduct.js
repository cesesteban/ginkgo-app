import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import IconButton from '@material-ui/core/IconButton';

import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/action'

const styles = {
    cardImg:{
        maxWidth: 285,
        minWidth: '285px',
        maxHeight: '295px',
        minHeight: '295px',
    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "300px",
        minWidth: "300px",
        minHeight: "175px",
        maxHeight: "175px",
        color: "black",
        textAlign: "center !important",
    },
    cardTitle: {
        color: 'black',
        padding: '15px',
        display: "flex",
        position: "relative",
        marginTop: "30px",
        maxHeight: "75px",
        minHeight: "75px",
        minWidth: '100px',
        maxWidth: '100px',
        textAlign: "center !important",
    },
    container: {
        maxWidth: '375px',
        minWidth: '375px',
        color: "#FFFFFF",
        padding: '0px',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
    display: {
        display: 'flex',
        justifyContent: 'grid'
    },
    arrowBack: {
        marginLeft: '100px',
        color:'black'
    }

};

const useStyles = makeStyles(styles);

export default function CardDetailProduct({ setChange, product }) {
    const classes = useStyles();

    const dispatch = useDispatch()

    function arrowBack() {
        setChange('Product')
    }
    function addToCart(product) {
        console.log(product)
        dispatch(addProduct(product))
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <IconButton>
                <ArrowBackIcon onClick={arrowBack} color='withe' />
            </IconButton>

            <GridContainer className={classes.container}>
                <GridItem xs={12} sm={12} md={8}>
                    <Card profile>
                        <CardAvatar profile>
                            <img className={classes.cardImg} src={product.img} alt="..." />
                        </CardAvatar>
                        <CardBody profile>
                            <h4 className={classes.cardTitle}>{product.product}</h4>
                            <p className={classes.description}>
                                {product.description}
                            </p>
                            <Button onClick={() => { addToCart(product) }} color="secondary">
                                Comprar
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
