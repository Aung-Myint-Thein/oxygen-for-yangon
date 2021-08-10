import React, {useMemo} from 'react';
import {
  Grid, IconButton, Typography,InputBase,Select,FormControl,
} from "@material-ui/core";
import {useTable, useGlobalFilter, useSortBy, usePagination, useColumnOrder} from 'react-table';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SortIcon from '@material-ui/icons/Sort';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import GlobalFilter from '../components/GlobalFilter';
import tableStyle from '../styles/table';

export const BasicTable = ({checkWidth, tableData, tableColumn}) => {
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => tableData, []);
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    prepareRow, 
    state, 
    setGlobalFilter, 
    page, 
    nextPage, 
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    setColumnOrder
  } = useTable({
    columns,
    data,
    initialState: {
      pageIndex : 0,
      hiddenColumns: [
        'Eအမည်', 'coordinate', 'publish', 'isActive', 
        'updatedBy', 'infoClass', 'Eမှတ်ချက်', 
        'ဝန်ဆောင်မှု', 'မြို့နယ်', 'အမျိုးအစား', 
        'ဝန်ဆောင်မှုအမျိုးအစား'],
      columnOrder: ['အမည်', 'လိပ်စာ', 'အချက်အလက်', 'မှတ်ချက်', 'နောက်ဆုံးအတည်ပြုချိန်', 'ဖွင့်ချိန်', 'ဖုန်း', 'facebook']
    }
  }, useGlobalFilter, useSortBy, usePagination, useColumnOrder);
  const {globalFilter, pageIndex, pageSize} = state;

  const Pagination = () => {
    return (
      <Grid container direction="row">
      {/* page count, page size, go to page */}
      <Grid item xs={12} sm={12} md={6} 
        style={{
          display: 'flex', 
          marginTop: 6,
          flexDirection: "row", 
          justifyContent: checkWidth === 'xs' || 'sm'  ? "center" : "flex-end"
        }}>
        <Typography variant="subtitle2" 
          style={tableStyle.currentPageText}>
            Page{' '}{pageIndex + 1} of {pageOptions.length}</Typography>
        <Typography variant="subtitle2" style={tableStyle.gotoPageText}>Go to Page: </Typography>
        <InputBase 
          type="number" 
          defaultValue={pageIndex + 1}
          onChange={e => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0 ;
            gotoPage(pageNumber)
          }}
          style={tableStyle.gotoPageInput}/>
         <FormControl variant="outlined" size="small">
        <Select
          native
          style={tableStyle.pageSizeSelect}
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
              {[5, 10, 25].map(pageSize =>  (<option key={pageSize} value={pageSize}>{pageSize}</option>))}
        </Select>
      </FormControl>
      </Grid>
      {/* prev, next, first and last page */}
      <Grid item xs={12} sm={12} md={6} 
        style={{
          display: 'flex', 
          flexDirection: "row", 
          marginTop: 6,
          justifyContent: checkWidth === 'xs' || 'sm' ? "center" : "flex-start"
          }}>
      <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <KeyboardArrowLeftIcon/>
        </IconButton>
       <IconButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          <FirstPageIcon/>
        </IconButton>
        <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
          <LastPageIcon/>
        </IconButton>
        <IconButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <KeyboardArrowRightIcon/>
        </IconButton>
      </Grid>
    </Grid>
    )
  }

  return (
    <>
    {/* global filter for all columns in the table */}
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} columnList={headerGroups}/>
    {/* react-table with styles and each column sorting */}
    <table {...getTableProps()}>
      <style jsx>{`
       table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      table td,table th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      
      table tr:nth-child(even){background-color: #f2f2f2;}
      
      table tr:hover {background-color: #ddd;}

      table tr p {
        padding: 10px
      }

      table tr p span {
        font-weight: 600
      }
      
      table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #39603D;
        color: white;
      }
      `}</style>
      {checkWidth === 'xs' ? null : <thead>
        {
          headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
               <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                 {column.render('Header')}
                 <span>
                   {column.isSorted ? 
                      (column.isSortedDesc ? 
                        <ArrowDropDownIcon style={tableStyle.sortByIcon} /> : 
                        <ArrowDropUpIcon style={tableStyle.sortByIcon}/>) : 
                        <SortIcon style={tableStyle.sortByIcon}/>}
                 </span>
                </th>
            ))
            }
          </tr>
          ))
        }
      </thead>}
      <tbody {...getTableBodyProps()}>
        {
          page.map((row)=> {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
              {row.cells.map((cell)=> {
                return checkWidth === 'xs' ? 
                <p {...cell.getCellProps()}>
                  <span>{cell.render('Header')}{' : '}</span>{cell.render('Cell')}
                </p> // table cell ui for mobile
                : <td {...cell.getCellProps()}>{cell.render('Cell')}</td> // for table cell ui for web
              })}
            </tr>
            )
          })
        }
      </tbody>
    </table>
    {/* table pagination for web and mobile */}
    <Pagination/>
    </>
  )
}

