import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(styles);

export default function HeaderLinks({ setCart, products }) {
  const classes = useStyles();

  return (
    <div>
      <IconButton onClick={() => setCart('Cart')} aria-label="notifications" color="inherit">
        <Badge badgeContent={products.length} color="secondary">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </IconButton>
    </div>
  );
}
