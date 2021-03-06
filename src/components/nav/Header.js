import * as React from "react";
import {
  Grid
} from "@material-ui/core";
import Link from "next/link";

import styles from '../../styles/header';

const navLinks = [
  { title: `အားလုံးကြည့်မယ်`, path: `/` },
  { title: `အောက်ဆီဂျင်အိုးဝယ်မယ်`, path: `/o2_buy` },
  { title: `အောက်ဆီဂျင်ဖြည့်မယ်`, path: `/o2_refill` },
  { title: `အောက်ဆီဂျင်ငှါးမယ်`, path: `/o2_rent` },
  { title: `သွေးစစ်မယ်`, path: `/lab` },
  { title: `ဆေးဝယ်မယ်`, path: `/med` },
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
     <img alt="Myanmar Medical Directory" src="/MMD-Logo.png" width="800" height="480" style={styles.mainLogoResponsive} />
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
              <Link href={path} key={title}>
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
