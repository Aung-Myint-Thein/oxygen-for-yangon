import * as React from "react";
import {
  Grid
} from "@material-ui/core";
import Link from "next/link";

import styles from '../../styles/header';

const navLinks = [
  { title: `Oxygen`, path: `/` },
  { title: `Doctor`, path: `/doctor` },
  { title: `Pharmacy`, path: `/pharmacy` },
  { title: `Rescue`, path: `/rescue` },
  { title: `Knowledge`, path: `/article` },
  { title: `Help`, path: `/help` },
];


const Header = ({checkWidth}) => {

  return (
   <Grid container direction="column"  
   spacing={4}
   style={{ 
     display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',}}>
     <Grid item xs={12} sm={12} md={12} 
      style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
        }}>
     <img alt="elearning certificate" src="/oxygen-myanmar.png" width="800" height="480" style={styles.mainLogoResponsive} />
     </Grid>
     <Grid container 
      columns={{ xs: 2, sm: 3, md: 6 }}  
      justifyContent="center" 
      alignItems="center" 
      style={{
        paddingLeft: checkWidth === 'xs'  ?  10 : 40, 
        paddingRight:checkWidth === 'xs'  ?  10 : 40
        }}>
     {navLinks.map(({ title, path }) => (
    <Grid item xs={6} sm={4} md={2} key={title}>
      <Link as={`${path}`} href={path} key={title}>
        <a style={styles.linkText}>
          {title}
        </a>
      </Link>
    </Grid>
  ))}
     </Grid>
   </Grid>    
  );
};

export default Header;
