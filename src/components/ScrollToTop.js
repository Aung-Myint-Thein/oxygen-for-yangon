import React, { useEffect, useState} from 'react';
import {
  Grid,
} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ScrollToTop = ({checkWidth}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
    }
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return function cleanupListener() {
      window.removeEventListener("scroll", toggleVisibility);
    }
  }, []);
  return (
    <Grid container direction="row" justifyContent={checkWidth === 'xs' ?  "center" : "flex-end" }>
      {
        isVisible ? <Fab color="primary" 
        size="small"
        aria-label="go to top"
        onClick={goToTop}
        style={{ background: 'white', marginTop: 20}}
        >
        <KeyboardArrowUpIcon fontSize="large" style={{color: '#39603D',}}/>
      </Fab> : null
      }
    </Grid>
  )
}
export default ScrollToTop;
