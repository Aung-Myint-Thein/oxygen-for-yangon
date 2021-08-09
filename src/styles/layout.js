import colors from '../../themes/colors';
export default {
  main: {
    display: 'flex',
    marginTop: 200,
    paddingBottom: 80,
  },
  contentContainer: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    backgroundColor: colors.primary
  },
  footerContainer: {
    flexShrink: 0,
    color: colors.softWhite,
    width: '100%',
  },
  footer: {
    width: '100%',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '200',
    paddingTop: 20,
    paddingBottom: 20,
  },
};
