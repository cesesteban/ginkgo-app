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
        maxHeight: '255px',
        minHeight: '255px',
    },
});

export default function CardCategory({category,setChange,setCategoryProduct}) {
    const classes = useStyles();

    function onSubmit(){
        setChange('Product')
        setCategoryProduct(category.category)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={onSubmit}>
                <CardMedia
                    component="img"
                    alt={category.category}
                    height="140"
                    image={category.img}
                    title={category.category}
                />                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {category.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {category.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}