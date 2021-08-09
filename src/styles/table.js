import colors from '../../themes/colors';
export default {

sortByIcon: {
  position: 'relative', 
  top: 6, 
  left: 2
},
currentPageText: {
  position: 'relative', 
  top: 12,
  color: colors.mediumGray
},
gotoPageText: {
  position: 'relative', 
  top: 12, 
  left: 6, 
  right: 6,
  color: colors.mediumGray
},
paginationContainer: {
  display: 'flex', 
  marginTop: 6,
  flexDirection: "row", 
},
gotoPageInput: {
  border: '1px solid #A9A9A9', 
  display: 'flex', 
  boxSizing: 'border-box', 
  padding: 4, width: '40px', 
  height: '25px',
  paddingLeft: 8, 
  position: 'relative', 
  top: 12, 
  left: 10, 
  borderRadius: 4,
  color: colors.mediumGray
},
pageSizeSelect: {
  border: '1px solid #A9A9A9', 
  display: 'flex',  
  width: '66px', 
  height: '25px', 
  position: 'relative', 
  top: 12, 
  left: 14,
  color: colors.mediumGray
}
}