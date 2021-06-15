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
    }
});

export default function BasicTable({ products }) {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <TableContainer className={classes.tableMargin} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Categoria</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow key={row.product}>
                            <TableCell>
                                <IconButton onClick={()=>dispatch(removeProduct(row.product))}>
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
        </TableContainer>
    );
}