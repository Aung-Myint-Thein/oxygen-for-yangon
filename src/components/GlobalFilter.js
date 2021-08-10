import React, {useState} from 'react';
import {useAsyncDebounce} from 'react-table';
import {
  Grid,
} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
const GlobalFilter = ({filter, setFilter}) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000);
  return (
  <Grid
    container direction="row" justifyContent="flex-end">
  <Grid item xs={12} sm={12} md={6}
    style={{
    padding: '0px 2px',
    display: 'flex',
    height: 46,
    alignItems: 'center',
    border: '1px solid #A9A9A9',
    borderRadius: 4,
    marginBottom: 10}}>
    <InputBase
     style={{flex: 1, paddingLeft: 10}}
      placeholder="Search"
      inputProps={{ 'aria-label': 'Search' }}
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
    />
    <IconButton type="submit"
    aria-label="search">
      <SearchIcon />
    </IconButton>
    </Grid>
  </Grid>
  );
}
export default GlobalFilter;