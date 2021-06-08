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

const styles = {
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "600px",
        minHeight: "155px",
        color: "black",
        textAlign: "center !important",
    },
    cardTitle: {
        padding:'15px',
        display: "flex",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        minWidth:'100px',
        textAlign: "center !important",
    },
    container: {
        color: "#FFFFFF",
        padding: '60px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
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
    arrowBack:{
        marginLeft: '100px'
    }

};

const useStyles = makeStyles(styles);

export default function CardDetailProduct({ setChange, product }) {
    const classes = useStyles();

    function arrowBack() {
        setChange('Product')
    }

    return (
        <div>
            <div className={classes.arrowBack}>
                <ArrowBackIcon onClick={arrowBack} color='primary' />
            </div>
            
            <GridContainer className={classes.container}>
                <GridItem xs={12} sm={12} md={8}>
                    <Card profile>
                        <CardAvatar profile>
                            <img src={product.img} alt="..." />
                        </CardAvatar>
                        <CardBody profile>
                            <h4 className={classes.cardTitle}>{product.product}</h4>
                            <p className={classes.description}>
                                {product.description}
                            </p>
                            <Button color="secondary">
                                Comprar
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
