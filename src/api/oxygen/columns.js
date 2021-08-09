//register columns for oxygen table
export const COLUMNS = [
  {
    Header: 'Availability', // set column name for ui table
    accessor: 'avaliablity', // add column name from api table
  },
  {
    Header: 'Township',
    accessor: 'township',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Refill Time',
    accessor: 'refilledTime',
  },
  {
    Header: 'Refill Type',
    accessor: 'refilledType',
  },
]