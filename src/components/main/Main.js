/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {  withWidth } from '@material-ui/core';
import {
  Grid, Typography
} from "@material-ui/core";
import Head from 'next/head';

import styles from '../../styles/main';
import ContentContainer from '../Layout/Content';
import ScrollToTop from '../ScrollToTop'; // add scroll to top arrow if required
import oxygenList from '../../api/oxygen/oxygenData'; // table data from api
import { COLUMNS } from '../../api/oxygen/columns'; // registered table columns
import { BasicTable } from '../BasicTable'; // reusable and responsive react-table with sorting, pagination and global filter


const Main = ({width}) => (
  <ContentContainer>
     <Head>
      <title>
         Oxygen for Yangon 
      </title>
      <meta name="keywords" content="oxygen,township,yangon,team,places," />
    </Head>
    <Grid container direction="column" justifyContent="center"  spacing={3}
    style={styles.tableContainer}>
      <Grid item item xs={12} sm={12} md={12}>
      <Typography>Places for Oxygen</Typography>
      </Grid>
      <Grid item item xs={12} sm={12} md={12} style={{ overflow: "scroll"}}>
        <BasicTable checkWidth={width} tableData={oxygenList} tableColumn={COLUMNS}/>
      </Grid>
    </Grid>
    {/* scroll to top arrow for mobile and web */}
    <ScrollToTop checkWidth={width}/>
    </ContentContainer>
);


Main.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Main);