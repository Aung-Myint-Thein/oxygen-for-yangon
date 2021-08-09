/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import {
  Grid, Typography
} from "@material-ui/core";

import ContentContainer from '../Layout/Content';
import styles from '../../styles/main';


const Article = () => (
  <ContentContainer>
  <Head>
   <title>
    Knowledge Oxygen for Yangon 
   </title>
   <meta name="keywords" content="knowledge,covid19,news,article,yangon,oxygen" />
 </Head>
 <Grid container direction="column" justifyContent="center"  spacing={3}
 style={styles.articleContainer}>
   <Grid item item xs={12} sm={12} md={12}>
   <Typography>Article List</Typography>
   </Grid>
 </Grid>
 </ContentContainer>
);
export default Article;