/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import {
  Grid, Typography
} from "@material-ui/core";

import ContentContainer from '../Layout/Content';
import styles from '../../styles/main';


const Rescue = () => (
  <ContentContainer>
  <Head>
   <title>
    Rescue Oxygen for Yangon 
   </title>
   <meta name="keywords" content="rescue,covid19,yangon,oxygen,team,orgainzation" />
 </Head>
 <Grid container direction="column" justifyContent="center"  spacing={3}
 style={styles.tableContainer}>
   <Grid item item xs={12} sm={12} md={12}>
   <Typography>Rescue List</Typography>
   </Grid>
 </Grid>
 </ContentContainer>
);
export default Rescue;