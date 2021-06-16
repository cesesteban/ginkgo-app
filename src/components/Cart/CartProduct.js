import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { removeProduct } from 'store/action';
import { useDispatch } from 'react-redux';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles({
    tableMargin: {
        marginTop: '15px'
    },
    table: {
        minWidth: 650,
    },
    cardImg: {
        minWidth: '150px',
        maxWidth: '150px',
        minHeight: '85px',
        maxHeight: '85px',
    },
    button: {
        marginLeft: 25
    }
});

export default function BasicTable({ products }) {
    const classes = useStyles();
    const dispatch = useDispatch()

    const onSubmit = () => {
        const arrayProduct = []
        products.map(product => (arrayProduct.push(product.product)))
        //console.log(arrayProduct.join('\n'))
        
        let url = `https://api.whatsapp.com/send?phone=+5491130762039&text=
        *MINIMAL SHOP*%0A%0A
        *Tu pedido:*%0A%0A
        ${arrayProduct.join('%20/')}`;
        window.open(url)
    }

    return (
        <TableContainer className={classes.tableMargin} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right"> </TableCell>
                        <TableCell align="right"> </TableCell>
                        <TableCell align="right">Categoria</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow key={row.product}>
                            <TableCell>
                                <IconButton onClick={() => dispatch(removeProduct(row.product))}>
                                    <DeleteOutlineIcon />
                                </IconButton>
                                {row.product}
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell align="right"><img className={classes.cardImg} src={row.img} alt="..." /></TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        <div className={classes.button}>
            <Button onClick={() => { onSubmit() }}>Pedir por WhatsApp</Button>
        </div>
        </TableContainer>
    );
}