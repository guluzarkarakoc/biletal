import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import styles from './stylesheet.js';
import Menu from '../menu';

const useStyles = createUseStyles(styles);

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <header className={classes.container}>
      <div className={classes.logo} onClick={() => navigate('/')}>
        <img className={classes.logoImage}
        src="/assets/images/logo1.jpg" 
        alt="logo1" />
      </div>
      <Menu />
    </header>
  );
};

export default Header;
