import React, {useState} from 'react';
import {useAsyncDebounce} from 'react-table';
import {
  Grid, Menu,MenuItem,
} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
//import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const GlobalFilter = ({filter, setFilter, columnList}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(filter);
  const [searchColumns , setSearchColumns] = useState(["avaliablity","township", "address", "phone", "refilledTime", "refilledType"])
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

const handleMenuClose = () => {
  setAnchorEl(null);
};

const renderAdvancedSearch = (
  <Menu
  anchorEl={anchorEl}
  anchorOrigin={{ vertical: "top", horizontal: "right" }}
  transformOrigin={{ vertical: "top", horizontal: "right" }}
  style={{ marginTop: 50,}}
  open={Boolean(anchorEl)}
  onClose={handleMenuClose}>
    {
      columnList[0]?.headers?.map((column) => 
        <MenuItem key={`${column.render('id')}`}>
          <input 
            type="checkbox" 
            checked={searchColumns.includes(column.render('id'))}
            onChange={(e) => {
              const checked = searchColumns.includes(column.render('id'))
              setSearchColumns(prev => checked ? 
                prev.filter((eachColumn) => eachColumn !== column.render('id')) : 
                [...prev, column.render('id')]
              )
            }}
          />
          {column.render('id')}
        </MenuItem>)
    }
  </Menu>
);
  
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
    <IconButton color="primary" 
      aria-label="directions"
      onClick={handleMenuOpen}>
      <ArrowDropDownIcon fontSize="large" 
      style={{
        background:'#39603D',
        color: "#ffffff",
        border: '2px solid #39603D', 
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        width:50,
        height: 40, 
        marginRight: -14}} />
    </IconButton>
    </Grid>
    {renderAdvancedSearch}
  </Grid>
  );
}
export default GlobalFilter;

