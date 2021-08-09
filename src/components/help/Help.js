/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import {
  Grid, Typography
} from "@material-ui/core";

import ContentContainer from '../Layout/Content';
import styles from '../../styles/main';


const Help = () => (
  <ContentContainer>
  <Head>
   <title>
   Help Oxygen for Yangon 
   </title>
   <meta name="keywords" content="help,covid19,team,organization,yangon,oxygen" />
 </Head>
 <Grid container direction="column" justifyContent="center"  spacing={3}
 style={styles.articleContainer}>
   <Grid item item xs={12} sm={12} md={12}>
   <Typography>Help Form</Typography>
   </Grid>
 </Grid>
 </ContentContainer>
);
export default Help;