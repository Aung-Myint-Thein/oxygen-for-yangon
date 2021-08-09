/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import {
  Grid, Typography
} from "@material-ui/core";

import ContentContainer from '../Layout/Content';
import styles from '../../styles/main';


const Doctor = () => (
  <ContentContainer>
     <Head>
      <title>
       Doctors Oxygen for Yangon 
      </title>
      <meta name="keywords" content="doctor,covid19,yangon,oxygen," />
    </Head>
    <Grid container direction="column" justifyContent="center"  spacing={3}
    style={styles.tableContainer}>
      <Grid item item xs={12} sm={12} md={12}>
      <Typography>Doctor List</Typography>
      </Grid>
    </Grid>
    </ContentContainer>
);
export default Doctor;