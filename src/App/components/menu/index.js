import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import styles from './stylesheet.js';

const useStyles = createUseStyles(styles);

const Menu = () => {
  const classes = useStyles();

  return (
    <ul className={classes.menuContainer}>
      <li>
        <Link to="/" className={`${classes.menuItem} ${classes.menuItemHover}`}>
          Ana Sayfa
        </Link>
      </li>
      <li>
        <Link to="/filmler" className={`${classes.menuItem} ${classes.menuItemHover}`}>
          Filmler
        </Link>
      </li>
      <li>
        <Link to="/iletisim" className={`${classes.menuItem} ${classes.menuItemHover}`}>
          İletişim
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
