import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import {  withWidth } from '@material-ui/core';

import Header from '../nav/Header';
import styles from '../../styles/layout';
import globalStyles from '../../styles/global'

const Layout = ({ children, width, navLinks }) => (
  <Grid container style={styles.contentContainer}>
     <style jsx global>
        {globalStyles}
      </style>
    <Grid container 
    direction="column"
    justifyContent="center"
    alignItems="center"
    style={{ 
      width: '90%',
      margin: '0 5%',
     }}>
       <header style={{width: '100%',}}>
         <Header checkWidth={width} navLinks={navLinks}/>
      </header>
      <main style={{width: '100%',}}>
        {children}
      </main>
       <footer style={styles.footerContainer}>
       <Grid style={styles.footer}>
        <Typography style={styles.footerText}>
          Copyright&copy; 2021. All rights reserved by Oxygen for Yangon.
         </Typography>
       </Grid>
    </footer>
    </Grid>
  </Grid>
);

Layout.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
export default withWidth()(Layout);