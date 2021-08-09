import React from 'react';
import {
  Grid
} from "@material-ui/core";

import styles from '../../styles/main';

const Content = ({children}) => {
  return (
    <Grid container style={styles.mainContainer}>
      {children}
    </Grid>
  )
}
export default Content;