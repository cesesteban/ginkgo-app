import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 285,
        margin: '15px',
        minWidth: '285px',
        maxHeight: '295px',
        minHeight: '295px',
    },
});

export default function CardProduct({product,onProduct,viewDetails}) {
    const classes = useStyles();
    function onsubmit(){
        onProduct(product)
        viewDetails()
        window.scrollTo(0, 0)
    }
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={onsubmit}>
                <CardMedia
                    component="img"
                    alt={product.product}
                    height="140"
                    image={product.img}
                    title={product.product}
                />                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.product}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}